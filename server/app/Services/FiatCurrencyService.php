<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class FiatCurrencyService
{
    public static function fetchFiatCurrencies(): array
    {
        $response = Http::get(env('EXCHANGE_RATES_API_URL').'v3/latest', [
            'apikey' => env('EXCHANGE_RATES_API_KEY'),
            'currencies' => implode(',', config('supportedCurrencies')),
        ]);

        return json_decode($response->body(), true);
    }
}
