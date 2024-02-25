<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coin extends Model
{
    protected $table = 'coins';

    protected $fillable = [
        'name',
        'symbol',
        'image',
        'market_cap_rank',
        'circulating_supply',
    ];
}
