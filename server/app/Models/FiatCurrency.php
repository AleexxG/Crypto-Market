<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FiatCurrency extends Model
{
    protected $table = 'fiat_currencies';

    protected $fillable = [
        'code',
        'rate',
        'country',
        'flag',
    ];

    const SUPPORTED_CURRENCIES = 'AED,ARS,AUD,BDT,BHD,BMD,BRL,CAD,CHF,CLP,CNY,CZK,DKK,EUR,GBP,HKD,HUF,IDR,ILS,INR,JPY,KRW,KWD,LKR,MMK,MXN,MYR,NGN,NOK,NZD,PHP,PKR,PLN,RUB,SAR,SEK,SGD,THB,TRY,TWD,UAH,USD,VEF,VND,ZAR';
}

