<?php

namespace App\Repository;

use App\Models\CoinMarketData;
use App\Services\CoinService;
use Illuminate\Database\Eloquent\Collection;

class CoinMarketDataRepo
{
    private CoinMarketData $coinMarketDataModel;

    public function __construct()
    {
        $this->coinMarketDataModel = new CoinMarketData();
    }

    public function createCoinMarketData(Collection $fiatCurrencies, int $createdCoinId, array $coin): void
    {
        $coinService = new CoinService();

        foreach($fiatCurrencies as $fiatCurrency) {
            $priceChange24h = $coinService->priceChangeForFiatCurrency($coin['current_price'], $fiatCurrency['rate'], $coin['price_change_percentage_24h_in_currency']);
            $priceChange7d = $coinService->priceChangeForFiatCurrency($coin['current_price'], $fiatCurrency['rate'], $coin['price_change_percentage_7d_in_currency']);
            $priceChange30d = $coinService->priceChangeForFiatCurrency($coin['current_price'], $fiatCurrency['rate'], $coin['price_change_percentage_30d_in_currency']);

            $this->coinMarketDataModel->create([
                'coin_id' => $createdCoinId,
                'fiat_currency_id' => $fiatCurrency['id'],
                'current_price' => $coin['current_price'] * $fiatCurrency['rate'],
                'market_cap' => $coin['market_cap'] * $fiatCurrency['rate'],
                'total_volume' => $coin['total_volume'] * $fiatCurrency['rate'],
                'ath' => $coin['ath'] * $fiatCurrency['rate'],
                'price_change_percentage_24h' => $priceChange24h,
                'price_change_percentage_7d' => $priceChange7d,
                'price_change_percentage_30d' => $priceChange30d,
            ]);
        }
    }
}
