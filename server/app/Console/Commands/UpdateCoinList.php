<?php

namespace App\Console\Commands;

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
    protected $signature = 'coin-list:update {page} {currencyId}';

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
        $currencyId = $this->argument('currencyId');
        $page = $this->argument('page');

        $coinsPerPage = config('apiPagination.coin_pulse.coins_per_page');
        $coinsPerPageFromAPI = config('apiPagination.coin_gecko.coins_per_page');
        $coinsAPIPage = ceil(($page * $coinsPerPage) / $coinsPerPageFromAPI);

        $coinRepo = new CoinRepo();
        $coins = $coinRepo->getCoinList($currencyId, $coinsAPIPage, $coinsPerPageFromAPI);
        $isDataUpdated = $coins->first()->updated_at->gt(Carbon::now()->subMinutes(5));

        if (!$isDataUpdated) {
            $updatedCoins = CoinService::fetchCoinList($coinsAPIPage);

            if (count($updatedCoins) > 1) {
                $coinMarketDataRepo = new CoinMarketDataRepo();

                foreach($updatedCoins as $updatedCoin) {
                    $coinRepo->updateCoin($updatedCoin);
                    $coinMarketDataRepo->updateCoinMarketData($coins, $updatedCoin);
                }
            }
        }
    }
}
