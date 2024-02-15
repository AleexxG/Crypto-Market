<?php

namespace Database\Seeders;

use App\Models\ExchangeRate;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class ExchangeRateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = Http::get(env('EXCHANGE_RATES_API_URL').'v3/latest', [
            'apikey' => env('EXCHANGE_RATES_API_KEY'),
            'currencies' => ExchangeRate::SUPPORTED_CURRENCIES,
        ]);

        $jsonResponse = $response->body();
        $exchangeRates = json_decode($jsonResponse, true);

        foreach($exchangeRates['data'] as $exchangeRate) {
            $country = substr($exchangeRate['code'], 0, -1);

            ExchangeRate::create([
                'code' => $exchangeRate['code'],
                'rate' => $exchangeRate['value'],
                'country' => $country,
                'flag' => 'https://flagcdn.com/'. strtolower($country) .'.svg',
            ]);
        }
    }
}
