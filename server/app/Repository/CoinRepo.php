<?php

namespace App\Repository;

use App\Models\Coin;
use App\Models\FiatCurrency;
use Illuminate\Database\Eloquent\Collection;

class CoinRepo
{
    private Coin $coinModel;

    public function __construct()
    {
        $this->coinModel = new Coin();
    }

    public function createCoinReturnId(array $coin): int
    {
        $createdCoin = $this->coinModel->create([
            'slug' => $coin['id'],
            'name' => $coin['name'],
            'symbol' => $coin['symbol'],
            'image' => $coin['image'],
            'market_cap_rank' => $coin['market_cap_rank'],
            'circulating_supply' => $coin['circulating_supply'],
        ]);

        return $createdCoin->id;
    }

    public function updateCoin(Coin $coin, array $coinNewData): void
    {
        $coin->update([
            'slug' => $coinNewData['id'],
            'name' => $coinNewData['name'],
            'symbol' => $coinNewData['symbol'],
            'image' => $coinNewData['image'],
            'market_cap_rank' => $coinNewData['market_cap_rank'],
            'circulating_supply' => $coinNewData['circulating_supply'],
        ]);
    }

    public function getCoinListInCurrency(string $currencyCode, int $page, int $coinsPerPage): Collection
    {
        $currency = FiatCurrency::firstWhere('code', strtoupper($currencyCode));
        $currencyId = $currency->id;
        $offset = ($page - 1) * $coinsPerPage;

        return $this->coinModel->with(['coinMarketData' => function ($query) use ($currencyId) {
            $query->where('fiat_currency_id', $currencyId);
        }])
        ->skip($offset)
        ->take($coinsPerPage)
        ->orderBy('market_cap_rank', 'ASC')
        ->get();
    }

    public function getSearchCoinResult(string $query): Collection
    {
        return $this->coinModel
        ->where('slug', 'LIKE', '%'.$query.'%')
        ->orWhere('name', 'LIKE', '%'.$query.'%')
        ->orWhere('symbol', 'LIKE', '%'.$query.'%')
        ->select('slug', 'name', 'symbol', 'market_cap_rank', 'image')
        ->get();
    }
}
