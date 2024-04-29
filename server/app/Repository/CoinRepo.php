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

    public function getCoinsByPercentChange(int $limit, string $orderBy): array
    {
        $coins = $this->coinModel->take(config('api.coin_gecko.coins_per_page'))
        ->with(['coinMarketData' => function ($query) use ($orderBy) {
            $query->orderBy('price_change_percentage_7d', $orderBy);
        }])->get();

        $mappedCoins = $coins->map(function ($coin) {
            $priceChange = $coin->coinMarketData->first()->price_change_percentage_7d;
            if (!isset($priceChange)) return null;

            return [
                'slug' => $coin->slug,
                'name' => $coin->name,
                'symbol' => $coin->symbol,
                'image' => $coin->image,
                'price_change_percentage_7d' => $priceChange,
            ];
        })->filter();

        $orderMethod = ($orderBy === 'asc') ? 'sortBy' : 'sortByDesc';
        return $mappedCoins->$orderMethod('price_change_percentage_7d')->take($limit)->values()->all();
    }
}
