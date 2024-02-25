<?php

namespace App\Repository;

use App\Models\Coin;

class CoinRepo
{
    private $coinModel;

    public function __construct()
    {
        $this->coinModel = new Coin();
    }

    public function createCoins(array $coins): void
    {
        foreach($coins as $coin) {
            $this->coinModel->create([
                'slug' => $coin['id'],
                'name' => $coin['name'],
                'symbol' => $coin['symbol'],
                'image' => $coin['image'],
                'market_cap_rank' => $coin['market_cap_rank'],
                'circulating_supply' => $coin['circulating_supply'],
            ]);
        }
    }
}
