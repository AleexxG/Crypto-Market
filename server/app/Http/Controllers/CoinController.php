<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetCoinListRequest;
use App\Models\FiatCurrency;
use App\Repository\CoinRepo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CoinController extends Controller
{
    private CoinRepo $coinRepo;

    public function __construct()
    {
        $this->coinRepo = new CoinRepo();
    }

    public function coinList(GetCoinListRequest $request): JsonResponse
    {
        $currencyCode = strtoupper($request->get('currency'));
        $currency = FiatCurrency::where('code', $currencyCode)->first();

        $coins = $this->coinRepo->getCoinList($currency->id, $request->get('page'), config('apiPagination.coin_pulse.coins_per_page'));
        return response()->json($coins);
    }
}
