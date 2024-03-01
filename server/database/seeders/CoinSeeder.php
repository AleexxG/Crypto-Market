<?php

namespace Database\Seeders;

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
        $coinRepo = new CoinRepo();
        $output = new ConsoleOutput();
        $progressBar = new ProgressBar($output, 8);

        $progressBar->start();

        for ($i = 1; $i <= 8; $i++) {
            $coins = CoinService::fetchCoinList($i);
            $coinRepo->createCoins($coins);

            $progressBar->advance();
            sleep(30);   // It needs to be delayed due to the API rate limit
        }

        $progressBar->finish();
        $output->writeln('');
    }
}
