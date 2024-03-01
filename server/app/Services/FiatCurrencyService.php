<?php

namespace App\Services;

use App\Models\FiatCurrency;
use Illuminate\Support\Facades\Http;

class FiatCurrencyService
{
    public static function fetchFiatCurrencies(): array
    {
        $response = Http::get(env('EXCHANGE_RATES_API_URL').'v3/latest', [
            'apikey' => env('EXCHANGE_RATES_API_KEY'),
            'currencies' => FiatCurrency::SUPPORTED_CURRENCIES,
        ]);

        return json_decode($response->body(), true);
    }
}
