<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetCoinListRequest;
use App\Models\Coin;
use App\Models\FiatCurrency;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CoinController extends Controller
{
    public function coinList(GetCoinListRequest $request): JsonResponse
    {
        $currencyCode = strtoupper($request->get('currency'));
        $currency = FiatCurrency::where('code', $currencyCode)->first();

        $coinsPerPage = 20;
        $offset = ($request->get('page') - 1) * $coinsPerPage;

        $coins = Coin::with(['coinMarketData' => function ($query) use ($currency) {
            $query->where('fiat_currency_id', $currency->id);
        }])
        ->skip($offset)
        ->take($coinsPerPage)
        ->orderBy('market_cap_rank', 'ASC')
        ->get();

        return response()->json($coins);
    }
}
