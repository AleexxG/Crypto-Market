<?php

namespace Database\Seeders;

use App\Repository\CoinRepo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;
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
            $response = Http::get(env('COIN_GECKO_API_URL') . 'coins/markets', [
                'vs_currency' => 'usd',
                'order' => 'market_cap_desc',
                'per_page' => 250,
                'page' => $i,
                'sparkline' => false,
                'price_change_percentage' => '1h,24h,7d,14d,30d',
                'locale' => 'en',
            ]);

            $coins = json_decode($response->body(), true);
            $coinRepo->createCoins($coins);

            $progressBar->advance();
            sleep(6);   // It needs to be delayed due to the API rate limit
        }

        $progressBar->finish();
        $output->writeln('');
    }
}
