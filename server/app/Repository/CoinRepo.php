<?php

namespace App\Repository;

use App\Models\Coin;
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

    public function getCoinList(int $currencyId, int $page, int $coinsPerPage): Collection
    {
        $offset = ($page - 1) * $coinsPerPage;

        return $this->coinModel->with(['coinMarketData' => function ($query) use ($currencyId) {
            $query->where('fiat_currency_id', $currencyId);
        }])
        ->skip($offset)
        ->take($coinsPerPage)
        ->orderBy('market_cap_rank', 'ASC')
        ->get();
    }
}
