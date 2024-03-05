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

        $offset = ($request->get('page') - 1) * Coin::COINS_PER_PAGE;

        $coins = Coin::with(['coinFiatMetrics' => function ($query) use ($currency) {
            $query->where('fiat_currency_id', $currency->id);
        }])
        ->skip($offset)
        ->take(Coin::COINS_PER_PAGE)
        ->get();

        return response()->json($coins);
        // coin per page remove var
        // coin fiat metrics rename to coins market data
        // maybe move circ supply to market data
    }
}
