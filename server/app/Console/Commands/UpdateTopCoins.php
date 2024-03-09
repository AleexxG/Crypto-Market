<?php

namespace App\Console\Commands;

use App\Models\FiatCurrency;
use App\Repository\CoinMarketDataRepo;
use App\Repository\CoinRepo;
use App\Services\CoinService;
use Illuminate\Console\Command;

class UpdateTopCoins extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'top-coins:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Updates top coins and their data in USD';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $updatedCoins = CoinService::fetchCoinList(1);

        if (count($updatedCoins) > 1) {
            $coinRepo = new CoinRepo();
            $coinMarketDataRepo = new CoinMarketDataRepo();

            $currency = FiatCurrency::firstWhere('code', 'USD'); // Using USD because exchange rates are based on USD
            $coins = $coinRepo->getCoinList($currency->id, 1, config('apiPagination.coin_gecko.coins_per_page'));

            foreach($updatedCoins as $updatedCoin) {
                $coinRepo->updateCoin($updatedCoin);
                $coinMarketDataRepo->updateCoinMarketData($coins, $updatedCoin);
            }
        }
    }
}
