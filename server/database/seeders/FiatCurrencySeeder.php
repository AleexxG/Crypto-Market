<?php

namespace Database\Seeders;

use App\Models\FiatCurrency;
use App\Repository\FiatCurrencyRepo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class FiatCurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = Http::get(env('EXCHANGE_RATES_API_URL').'v3/latest', [
            'apikey' => env('EXCHANGE_RATES_API_KEY'),
            'currencies' => FiatCurrency::SUPPORTED_CURRENCIES,
        ]);

        $currencies = json_decode($response->body(), true);

        $fiatCurrencyRepo = new FiatCurrencyRepo();
        $fiatCurrencyRepo->createFiatCurrencies($currencies['data']);
    }
}
