<?php

namespace App\Repository;

use App\Models\FiatCurrency;

class FiatCurrencyRepo
{
    private FiatCurrency $fiatCurrencyModel;

    public function __construct()
    {
        $this->fiatCurrencyModel = new FiatCurrency();
    }

    public function createFiatCurrencies(array $currencies): void
    {
        foreach($currencies as $currency) {
            $country = substr($currency['code'], 0, -1);

            $this->fiatCurrencyModel->create([
                'code' => $currency['code'],
                'rate' => $currency['value'],
                'country' => $country,
                'flag' => 'https://flagcdn.com/'. strtolower($country) .'.svg',
            ]);
        }
    }
}
