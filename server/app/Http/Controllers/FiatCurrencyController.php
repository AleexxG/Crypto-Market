<?php

namespace App\Http\Controllers;

use App\Models\FiatCurrency;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FiatCurrencyController extends Controller
{
    public function getSupportedCurrencies(): JsonResponse
    {
        $supportedCurrencies = FiatCurrency::select('flag', 'code')->get();
        return response()->json($supportedCurrencies);
    }
}
