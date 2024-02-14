<?php

namespace Database\Seeders;

use App\Models\ExchangeRate;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class ExchangeRateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $currencies = 'AED%2CARS%2CAUD%2CBDT%2CBHD%2CBMD%2CBRL%2CCAD%2CCHF%2CCLP%2CCNY%2CCZK%2CDKK%2CEUR%2CGBP%2CHKD%2CHUF%2CIDR%2CILS%2CINR%2CJPY%2CKRW%2CKWD%2CLKR%2CMMK%2CMXN%2CMYR%2CNGN%2CNOK%2CNZD%2CPHP%2CPKR%2CPLN%2CRUB%2CSAR%2CSEK%2CSGD%2CTHB%2CTRY%2CTWD%2CUAH%2CUSD%2CVEF%2CVND%2CZAR';

        $response = Http::get(env('EXCHANGE_RATES_API_URL').'v3/latest', [
            'apikey' => env('EXCHANGE_RATES_API_KEY'),
            '&currencies' => $currencies,
        ]);

        $jsonResponse = $response->body();
        $exchangeRates = json_decode($jsonResponse, true);

        foreach($exchangeRates['data'] as $exchangeRate) {
            ExchangeRate::create([
                'code' => $exchangeRate['code'],
                'rate' => $exchangeRate['value'],
            ]);
        }
    }
}
