<?php

namespace App\Console\Commands;

use App\Http\Helpers\CoinHelper;
use App\Repository\CoinMarketDataRepo;
use App\Repository\CoinRepo;
use App\Services\CoinService;
use Carbon\Carbon;
use Illuminate\Console\Command;

class UpdateCoinList extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'coin-list:update {page} {currencyCode}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Updates list of coins based on the requested page and currency';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $coinRepo = new CoinRepo();
        $coinMarketDataRepo = new CoinMarketDataRepo();

        $currencyCode = $this->argument('currencyCode');
        $page = $this->argument('page');
        $apiPage = CoinHelper::convertRequestPageToApiPage($page);

        $coins = $coinRepo->getCoinListInCurrency($currencyCode, $apiPage, config('apiPagination.coin_gecko.coins_per_page'));

        $updatedCoinsData = CoinService::fetchCoinList($apiPage);
        if (!isset($updatedCoinsData)) return;

        foreach($updatedCoinsData as $updatedCoin) {
            $coin = $coins->firstWhere('market_cap_rank', $updatedCoin['market_cap_rank']);

            if (!isset($coin)) continue;
            $coinRepo->updateCoin($coin, $updatedCoin);
            $coinMarketDataRepo->updateCoinData($coin, $updatedCoin);
        }
    }
}
