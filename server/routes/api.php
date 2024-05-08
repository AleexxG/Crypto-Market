<?php

use App\Http\Controllers\CoinController;
use App\Http\Controllers\FiatCurrencyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/supported-currencies', [FiatCurrencyController::class, 'getSupportedCurrencies']);

Route::controller(CoinController::class)->group(function () {
    Route::get('/coins/list', 'coinList');
    Route::get('/coins/search', 'searchCoin');
    Route::get('/coins/top-gainers', 'topCoinGainers');
    Route::get('/coins/top-losers', 'topCoinLosers');
    Route::get('/coins/{coin:slug}', 'singleCoin');
});
