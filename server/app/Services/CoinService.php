<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CoinService
{
    public static function fetchCoinList(int $page): array
    {
        $response = Http::get(env('COIN_GECKO_API_URL') . 'coins/markets', [
            'vs_currency' => 'usd',
            'order' => 'market_cap_desc',
            'per_page' => 250,
            'page' => $page,
            'sparkline' => false,
            'price_change_percentage' => '1h,24h,7d,14d,30d',
            'locale' => 'en',
        ]);

        return json_decode($response->body(), true);
    }
}
