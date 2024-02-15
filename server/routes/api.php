<?php

use App\Http\Controllers\ExchangeRateController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/supported-currencies', [ExchangeRateController::class, 'getSupportedCurrencies']);
