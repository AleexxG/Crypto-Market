<?php

namespace App\Http\Helpers;

class CoinHelper
{
    public static function reformatSingleCoinArray(array $coinArray): array
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
}
