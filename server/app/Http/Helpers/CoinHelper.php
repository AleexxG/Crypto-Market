<?php

namespace App\Http\Helpers;

class CoinHelper
{
    public static function convertRequestPageToApiPage(int $requestedPage): int
    {
        $coinsPerPage = config('api.coin_pulse.coins_per_page');
        $coinsPerPageForApi = config('api.coin_gecko.coins_per_page');
        return ceil(($requestedPage * $coinsPerPage) / $coinsPerPageForApi);
    }
}
