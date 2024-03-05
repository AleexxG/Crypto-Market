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
}

