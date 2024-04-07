<?php

namespace App\Services;

use App\Http\Helpers\CoinHelper;
use Illuminate\Support\Facades\Http;

class CoinService
{
    public static function fetchCoinList(int $page): ?array
    {
        $response = Http::get(env('COIN_GECKO_API_URL') . 'coins/markets', [
            'vs_currency' => 'usd',
            'order' => 'market_cap_desc',
            'per_page' => config('api.coin_gecko.coins_per_page'),
            'page' => $page,
            'sparkline' => false,
            'price_change_percentage' => '1h,24h,7d,14d,30d',
            'locale' => 'en',
        ]);

        if ($response->status() === 429) return null;
        return json_decode($response->body(), true);
    }

    public static function fetchSingleCoin(string $coinName): ?array
    {
        $response = Http::get(env('COIN_GECKO_API_URL') . 'coins/' . $coinName);
        if ($response->status() === 429) return null;

        $responseArray = json_decode($response->body(), true);
        return CoinHelper::reformatSingleCoinApiArray($responseArray);
    }
}
