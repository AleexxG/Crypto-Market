<?php

namespace Database\Seeders;

use App\Models\FiatCurrency;
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

        $jsonResponse = $response->body();
        $currencies = json_decode($jsonResponse, true);

        foreach($currencies['data'] as $currency) {
            $country = substr($currency['code'], 0, -1);

            FiatCurrency::create([
                'code' => $currency['code'],
                'rate' => $currency['value'],
                'country' => $country,
                'flag' => 'https://flagcdn.com/'. strtolower($country) .'.svg',
            ]);
        }
    }
}
