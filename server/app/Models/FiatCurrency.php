<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class FiatCurrency extends Model
{
    protected $table = 'fiat_currencies';

    protected $fillable = [
        'code',
        'rate',
        'country',
        'flag',
    ];

    public function coinMarketData(): HasMany
    {
        return $this->hasMany(CoinMarketData::class, 'fiat_currency_id', 'id');
    }
}

