<?php

namespace App\Repository;

use App\Models\Coin;
use App\Models\CoinMarketData;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;

class CoinMarketDataRepo
{
    private CoinMarketData $coinMarketDataModel;

    public function __construct()
    {
        $this->coinMarketDataModel = new CoinMarketData();
    }

    public function createCoinData(Collection $fiatCurrencies, int $createdCoinId, array $coin): void
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

    public function updateCoinData(Coin $coin, array $coinNewData): void
    {
        foreach($coin->coinMarketData as $data) {
            $data->update([
                'current_price' => $coinNewData['current_price'] * $data->fiatCurrency->rate,
                'market_cap' => $coinNewData['market_cap'] * $data->fiatCurrency->rate,
                'total_volume' => $coinNewData['total_volume'] * $data->fiatCurrency->rate,
                'ath' => $coinNewData['ath'] * $data->fiatCurrency->rate,
                'price_change_percentage_24h' => $coinNewData['price_change_percentage_24h_in_currency'] ?? $coinNewData['price_change_percentage_24h'] ?? 0,
                'price_change_percentage_7d' => $coinNewData['price_change_percentage_7d_in_currency'] ?? $coinNewData['price_change_percentage_7d'] ?? 0,
                'price_change_percentage_30d' => $coinNewData['price_change_percentage_30d_in_currency'] ?? $coinNewData['price_change_percentage_30d'] ?? 0,
            ]);
        }
    }

    public function getCoinDataInCurrency(int $coinId, string $currencyCode): ?CoinMarketData
    {
        $currencyCodeToUpper = strtoupper($currencyCode);

        return $this->coinMarketDataModel
        ->where('coin_id', $coinId)
        ->whereHas('fiatCurrency', function($query) use ($currencyCodeToUpper) {
            $query->where('code', $currencyCodeToUpper);
        })
        ->first();
    }

    public function isCoinListDataUpdated(Collection $coinList): bool
    {
        $outdatedCoins = $coinList->filter(function ($coin) {
            return $coin->coinMarketData
            ->first()
            ->updated_at
            ->lt(Carbon::now()->subMinutes(config('api.coin_pulse.update_frequency')));
        });

        return $outdatedCoins->isEmpty();
    }

    public function isCoinUpdatedInAllCurrencies(int $coinId): bool
    {
        $coinData = $this->coinMarketDataModel
        ->where('coin_id', $coinId)
        ->get();

        return $coinData->where('updated_at', '<', Carbon::now()->subMinutes(config('api.coin_pulse.update_frequency')))
        ->isEmpty();
    }
}
