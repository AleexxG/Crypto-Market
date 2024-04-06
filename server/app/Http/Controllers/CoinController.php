<?php

namespace App\Http\Controllers;

use App\Http\Helpers\CoinHelper;
use App\Http\Requests\GetCoinListRequest;
use App\Models\Coin;
use App\Models\FiatCurrency;
use App\Repository\CoinMarketDataRepo;
use App\Repository\CoinRepo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class CoinController extends Controller
{
    private CoinRepo $coinRepo;
    private CoinMarketDataRepo $coinMarketDataRepo;

    public function __construct()
    {
        $this->coinRepo = new CoinRepo();
        $this->coinMarketDataRepo = new CoinMarketDataRepo();
    }

    public function coinList(GetCoinListRequest $request): JsonResponse
    {
        $page = $request->get('page');

        $currencyCode = strtoupper($request->get('currency'));
        $currency = FiatCurrency::firstWhere('code', $currencyCode);

        $apiPage = CoinHelper::convertRequestPageToApiPage($page);
        $coinsFromApiPage = $this->coinRepo->getCoinListInCurrency($currency->id, $apiPage, config('apiPagination.coin_gecko.coins_per_page'));
        $isCoinListUpdated = $this->coinMarketDataRepo->isCoinListUpdated($coinsFromApiPage);

        if (!$isCoinListUpdated) {
            Artisan::call('coin-list:update', ['page' => $page, 'currencyId' => $currency->id]);
        }

        $coins = $this->coinRepo->getCoinListInCurrency($currency->id, $page, config('apiPagination.coin_pulse.coins_per_page'));
        return response()->json($coins);
    }

    public function singleCoinPage(Coin $coin): JsonResponse
    {
        $isCoinUpdated = $this->coinMarketDataRepo->isCoinUpdatedInAllCurrencies($coin->id);
        if (!$isCoinUpdated) Artisan::call('single-coin:update', ['coinId' => $coin->id]);

        $coinData = $coin->with('coinMarketData')->firstWhere('id', $coin->id);
        $coinDataReformated = CoinHelper::reformatSingleCoinInstanceModel($coinData);
        return response()->json($coinDataReformated);
    }
}
