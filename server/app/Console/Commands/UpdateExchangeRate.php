<?php

namespace App\Console\Commands;

use App\Models\FiatCurrency;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class UpdateExchangeRate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'exchange-rate:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gets data from API to update exchange rates in database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $response = Http::get(env('EXCHANGE_RATES_API_URL').'v3/latest', [
            'apikey' => env('EXCHANGE_RATES_API_KEY'),
            'currencies' => FiatCurrency::SUPPORTED_CURRENCIES,
        ]);

        $jsonResponse = $response->body();
        $currencies = json_decode($jsonResponse, true);

        foreach($currencies['data'] as $currency) {
            $currencyToUpdate = FiatCurrency::where(['code' => $currency['code']])->first();

            $currencyToUpdate->rate = $currency['value'];
            $currencyToUpdate->save();
        }
    }
}
