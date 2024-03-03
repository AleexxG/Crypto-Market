<?php

namespace App\Repository;

use App\Models\CoinFiatMetrics;
use App\Services\CoinService;
use Illuminate\Database\Eloquent\Collection;

class CoinFiatMetricsRepo
{
    private CoinFiatMetrics $coinFiatMetricsModel;

    public function __construct()
    {
        $this->coinFiatMetricsModel = new CoinFiatMetrics();
    }

    public function createCoinFiatMetrics(Collection $fiatCurrencies, int $createdCoinId, array $coin): void
    {
        $coinService = new CoinService();

        foreach($fiatCurrencies as $fiatCurrency) {
            $priceChange24h = $coinService->priceChangeForFiatCurrency($coin['current_price'], $fiatCurrency['rate'], $coin['price_change_percentage_24h_in_currency']);
            $priceChange7d = $coinService->priceChangeForFiatCurrency($coin['current_price'], $fiatCurrency['rate'], $coin['price_change_percentage_7d_in_currency']);
            $priceChange30d = $coinService->priceChangeForFiatCurrency($coin['current_price'], $fiatCurrency['rate'], $coin['price_change_percentage_30d_in_currency']);

            $this->coinFiatMetricsModel->create([
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
