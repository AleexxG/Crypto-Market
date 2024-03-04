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

    const COINS_PER_PAGE = 20;

    public function coinFiatMetrics(): HasMany
    {
        return $this->hasMany(CoinFiatMetrics::class, 'coin_id', 'id');
    }
}
