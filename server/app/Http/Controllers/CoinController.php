<?php

namespace App\Http\Controllers;

use App\Http\Requests\GetCoinListRequest;
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
        $firstPageNoUpdatedCoins = ceil(config('apiPagination.coin_gecko.coins_per_page') / config('apiPagination.coin_pulse.coins_per_page'));

        $currencyCode = strtoupper($request->get('currency'));
        $currency = FiatCurrency::firstWhere('code', $currencyCode);

        if ($currencyCode !== 'USD' && $page < $firstPageNoUpdatedCoins) {
            Artisan::call('top-coins:update', ['currency' => $currencyCode]);

        } else if ($page >= $firstPageNoUpdatedCoins) {
            // update command from GPT with currency parameter
        }

        $coins = $this->coinRepo->getCoinList($currency->id, $page, config('apiPagination.coin_pulse.coins_per_page'));
        return response()->json($coins);
    }
}
