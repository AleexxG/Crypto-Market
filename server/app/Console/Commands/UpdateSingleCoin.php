<?php

namespace App\Console\Commands;

use App\Models\Coin;
use App\Repository\CoinMarketDataRepo;
use App\Repository\CoinRepo;
use App\Services\CoinService;
use Carbon\Carbon;
use Illuminate\Console\Command;

class UpdateSingleCoin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'single-coin:update {coinId}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Updates single coin data in all currencies';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $coinId = $this->argument('coinId');
        $coin = Coin::firstWhere('id', $coinId);

        $coinData = $coin->with('coinMarketData', 'coinMarketData.fiatCurrency')
        ->firstWhere('id', $coinId)
        ->coinMarketData;

        $isAllDataUpdated = $coinData->where('updated_at', '<', Carbon::now()->subMinutes(5))->isEmpty();

        if (!$isAllDataUpdated) {
            $coinMarketDataRepo = new CoinMarketDataRepo();
            $coinRepo = new CoinRepo();

            $coinDataInUsd = $coinData->firstWhere('fiat_currency_id', 42); // 42 is currency ID for USD
            $isUsdDataUpdated = $coinDataInUsd->updated_at
            ->gt(Carbon::now()->subMinutes(5));

            if (!$isUsdDataUpdated) {
                $updatedCoin = CoinService::fetchSingleCoin($coin->slug);
                $coinRepo->updateCoin($coin, $updatedCoin);
                $coinMarketDataRepo->updateCoinMarketData($coin, $updatedCoin);

            } else {
                $coinMarketDataRepo->updateCoinMarketData($coin, $coinDataInUsd->toArray());
            }
        }
    }
}
