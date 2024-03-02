<?php

namespace App\Services;

class CoinFiatMetricsService
{
    public function priceChangeForFiatCurrency(float $currentCoinPriceUsd, float $currencyExchangeRate, ?float $priceChangeUsd): float
    {
        $coinPriceUsdBefore = $currentCoinPriceUsd - ($currentCoinPriceUsd * ($priceChangeUsd / 100));
        $coinPriceInCurrencyBefore = $coinPriceUsdBefore * $currencyExchangeRate;
        $currentCoinPriceInCurrency = $currentCoinPriceUsd * $currencyExchangeRate;

        return (($currentCoinPriceInCurrency - $coinPriceInCurrencyBefore) / $coinPriceInCurrencyBefore) * 100;
    }
}
