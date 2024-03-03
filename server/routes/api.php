<?php

use App\Http\Controllers\CoinController;
use App\Http\Controllers\FiatCurrencyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/supported-currencies', [FiatCurrencyController::class, 'getSupportedCurrencies']);

Route::get('/coins/list/', [CoinController::class, 'coinList']);
