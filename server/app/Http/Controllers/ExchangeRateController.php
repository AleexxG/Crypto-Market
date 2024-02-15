<?php

namespace App\Http\Controllers;

use App\Models\ExchangeRate;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ExchangeRateController extends Controller
{
    public function getSupportedCurrencies(): JsonResponse
    {
        $supportedCurrencies = ExchangeRate::select('flag', 'code')->get();
        return response()->json($supportedCurrencies);
    }
}
