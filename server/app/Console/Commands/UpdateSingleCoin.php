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
        $coinMarketDataRepo = new CoinMarketDataRepo();

        $coinId = $this->argument('coinId');
        $coin = Coin::firstWhere('id', $coinId);

        $coinDataInUsd = $coinMarketDataRepo->getCoinDataInCurrency($coinId, 'usd');
        $isCoinUpdatedInUsd = $coinDataInUsd->updated_at->gt(Carbon::now()->subMinutes(5));

        if ($isCoinUpdatedInUsd) {
            $coinMarketDataRepo->updateCoinData($coin, $coinDataInUsd->toArray());
            return;
        }

        $updatedCoinData = CoinService::fetchSingleCoin($coin->slug);
        if (!isset($updatedCoinData)) return;

        $coinRepo = new CoinRepo();
        $coinRepo->updateCoin($coin, $updatedCoinData);
        $coinMarketDataRepo->updateCoinData($coin, $updatedCoinData);
    }
}
