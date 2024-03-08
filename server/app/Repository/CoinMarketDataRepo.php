<?php

namespace App\Repository;

use App\Models\CoinMarketData;
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
        foreach($fiatCurrencies as $fiatCurrency) {
            $this->coinMarketDataModel->create([
                'coin_id' => $createdCoinId,
                'fiat_currency_id' => $fiatCurrency['id'],
                'current_price' => $coin['current_price'] * $fiatCurrency['rate'],
                'market_cap' => $coin['market_cap'] * $fiatCurrency['rate'],
                'total_volume' => $coin['total_volume'] * $fiatCurrency['rate'],
                'ath' => $coin['ath'] * $fiatCurrency['rate'],
                'price_change_percentage_24h' => $coin['price_change_percentage_24h_in_currency'],
                'price_change_percentage_7d' => $coin['price_change_percentage_7d_in_currency'],
                'price_change_percentage_30d' => $coin['price_change_percentage_30d_in_currency'],
            ]);
        }
    }

    public function updateCoinMarketData(Collection $coins, array $coinNewData): void
    {
        $coin = $coins->firstWhere('market_cap_rank', $coinNewData['market_cap_rank']);

        foreach($coin->coinMarketData as $data) {
            $data->update([
                'current_price' => $coinNewData['current_price'] * $data->fiatCurrency->rate,
                'market_cap' => $coinNewData['market_cap'] * $data->fiatCurrency->rate,
                'total_volume' => $coinNewData['total_volume'] * $data->fiatCurrency->rate,
                'ath' => $coinNewData['ath'] * $data->fiatCurrency->rate,
                'price_change_percentage_24h' => $coinNewData['price_change_percentage_24h_in_currency'] ?? 0,
                'price_change_percentage_7d' => $coinNewData['price_change_percentage_7d_in_currency'] ?? 0,
                'price_change_percentage_30d' => $coinNewData['price_change_percentage_30d_in_currency'] ?? 0,
            ]);
        }
    }
}
