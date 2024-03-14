<?php

namespace App\Console\Commands;

use App\Models\Coin;
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
        // check if all coin data is updated in last 5 min
        // is USD coin data update in last 5 min -> if no call API
        // update data in all curr

        $coinId = $this->argument('coinId');
        $coin = Coin::firstWhere('id', $coinId);

        $coinData = $coin->with('coinMarketData', 'coinMarketData.fiatCurrency')
        ->first()
        ->coinMarketData;

        $isAllDataUpdated = $coinData->where('updated_at', '<', Carbon::now()->subMinutes(5))->isEmpty();

        if (!$isAllDataUpdated) {
            $isUsdDataUpdated = $coinData->firstWhere('fiat_currency_id', 42) // 42 is currency ID for USD
            ->updated_at
            ->gt(Carbon::now()->subMinutes(5));

            if (!$isUsdDataUpdated) {
                // fetch data for single coin
            }

            // update data in all curr
        }
    }
}
