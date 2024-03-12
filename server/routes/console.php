<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;


Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote')->hourly();

Schedule::command('exchange-rate:update')->everyThreeHours();
Schedule::command('coin-list:update', [1, 42])->everyFiveMinutes(); // 42 is currency ID for USD
