<?php

namespace Database\Seeders;

use App\Repository\FiatCurrencyRepo;
use App\Services\FiatCurrencyService;
use Illuminate\Database\Seeder;

class FiatCurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currencies = FiatCurrencyService::fetchFiatCurrencies();
        $fiatCurrencyRepo = new FiatCurrencyRepo();
        $fiatCurrencyRepo->createFiatCurrencies($currencies['data']);
    }
}
