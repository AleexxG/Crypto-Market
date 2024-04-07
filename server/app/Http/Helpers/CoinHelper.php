<?php

namespace App\Http\Helpers;
use App\Models\Coin;

class CoinHelper
{
    public static function reformatSingleCoinApiArray(array $coinArray): array
    {
        return [
            "id" => $coinArray['id'],
            "symbol" => $coinArray['symbol'],
            "name" => $coinArray['name'],
            "image" => $coinArray['image']['large'],
            "current_price" => $coinArray['market_data']['current_price']['usd'],
            "market_cap" => $coinArray['market_data']['market_cap']['usd'],
            "market_cap_rank" => $coinArray['market_data']['market_cap_rank'],
            "total_volume" => $coinArray['market_data']['total_volume']['usd'],
            "circulating_supply" => $coinArray['market_data']['circulating_supply'],
            "ath" => $coinArray['market_data']['ath']['usd'],
            "price_change_percentage_24h_in_currency" => $coinArray['market_data']['price_change_percentage_24h_in_currency']['usd'],
            "price_change_percentage_7d_in_currency" => $coinArray['market_data']['price_change_percentage_7d_in_currency']['usd'],
            "price_change_percentage_30d_in_currency" => $coinArray['market_data']['price_change_percentage_30d_in_currency']['usd'],
        ];
    }

    public static function reformatSingleCoinInstanceModel(Coin $coin): array
    {
        $coinDataArray = [
            "slug" => $coin->slug,
            "name" => $coin->name,
            "symbol" => $coin->symbol,
            "image" => $coin->image,
            "market_cap_rank" => $coin->market_cap_rank,
            "circulating_supply" => $coin->circulating_supply,
            "coin_market_data" => [],
        ];

        foreach($coin->coinMarketData as $marketData) {
            $coinDataArray['coin_market_data'][$marketData->FiatCurrency->code] = [
                "current_price" => $marketData->current_price,
                "market_cap" => $marketData->market_cap,
                "total_volume" => $marketData->total_volume,
                "ath" => $marketData->ath,
                "price_change_percentage_24h" => $marketData->price_change_percentage_24h,
                "price_change_percentage_7d" => $marketData->price_change_percentage_7d,
                "price_change_percentage_30d" => $marketData->price_change_percentage_30d,
                "updated_at" => $marketData->updated_at,
            ];
        }

        return $coinDataArray;
    }

    public static function convertRequestPageToApiPage(int $requestedPage): int
    {
        $coinsPerPage = config('api.coin_pulse.coins_per_page');
        $coinsPerPageForApi = config('api.coin_gecko.coins_per_page');
        return ceil(($requestedPage * $coinsPerPage) / $coinsPerPageForApi);
    }
}
