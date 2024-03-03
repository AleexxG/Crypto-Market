<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
