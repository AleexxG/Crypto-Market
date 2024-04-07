<?php

namespace Database\Seeders;

use App\Models\FiatCurrency;
use App\Repository\CoinMarketDataRepo;
use App\Repository\CoinRepo;
use App\Services\CoinService;
use Illuminate\Database\Seeder;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Output\ConsoleOutput;

class CoinSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $output = new ConsoleOutput();
        $progressBar = new ProgressBar($output, config('apiPagination.coin_gecko.max_pages'));
        $progressBar->start();

        $coinRepo = new CoinRepo();
        $coinMarketDataRepo = new CoinMarketDataRepo();

        $fiatCurrencies = FiatCurrency::select('id', 'rate')->get();

        for ($i = 1; $i <= config('apiPagination.coin_gecko.coins_per_page'); $i++) {
            $coins = CoinService::fetchCoinList($i);

            foreach($coins as $coin) {
                $createdCoinId = $coinRepo->createCoinReturnId($coin);
                $coinMarketDataRepo->createCoinData($fiatCurrencies, $createdCoinId, $coin);
            }

            $progressBar->advance();
            if ($i < config('apiPagination.coin_gecko.coins_per_page')) sleep(30);   // It needs to be delayed due to the API rate limit
        }

        $progressBar->finish();
        $output->writeln('');
    }
}
