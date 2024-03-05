<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Coin extends Model
{
    protected $table = 'coins';

    protected $fillable = [
        'slug',
        'name',
        'symbol',
        'image',
        'market_cap_rank',
        'circulating_supply',
    ];

    public function coinMarketData(): HasMany
    {
        return $this->hasMany(CoinMarketData::class, 'coin_id', 'id');
    }
}
