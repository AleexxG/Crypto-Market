<?php

namespace App\Console\Commands;

use App\Repository\FiatCurrencyRepo;
use App\Services\FiatCurrencyService;
use Illuminate\Console\Command;

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
    protected $description = 'Updates exchange rates';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $currencies = FiatCurrencyService::fetchFiatCurrencies();
        $fiatCurrencyRepo = new FiatCurrencyRepo();
        $fiatCurrencyRepo->updateExchangeRates($currencies['data']);
    }
}
