<?php

namespace App\Http\Controllers;

use App\Http\Helpers\CoinHelper;
use App\Http\Requests\GetCoinListRequest;
use App\Models\Coin;
use App\Models\FiatCurrency;
use App\Repository\CoinRepo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class CoinController extends Controller
{
    private CoinRepo $coinRepo;

    public function __construct()
    {
        $this->coinRepo = new CoinRepo();
    }

    public function coinList(GetCoinListRequest $request): JsonResponse
    {
        $page = $request->get('page');
        $firstPageNoUpdated = ceil(config('apiPagination.coin_gecko.coins_per_page') / config('apiPagination.coin_pulse.coins_per_page'));

        $currencyCode = strtoupper($request->get('currency'));
        $currency = FiatCurrency::firstWhere('code', $currencyCode);

        if ($currencyCode !== 'USD' || ($currencyCode === 'USD' && $page >= $firstPageNoUpdated)) {
            Artisan::call('coin-list:update', ['page' => $page, 'currencyId' => $currency->id]);
        }

        $coins = $this->coinRepo->getCoinListInCurrency($currency->id, $page, config('apiPagination.coin_pulse.coins_per_page'));
        return response()->json($coins);
    }

    public function singleCoinPage(Coin $coin): JsonResponse
    {
        Artisan::call('single-coin:update', ['coinId' => $coin->id]);
        $coinData = $coin->with('coinMarketData')->first();
        $coinDataReformated = CoinHelper::reformatSingleCoinInstanceModel($coinData);
        return response()->json($coinDataReformated);
    }
}
