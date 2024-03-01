<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('coin_metrics', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('coin_id');
            $table->unsignedBigInteger('fiat_currency_id');
            $table->decimal('current_price', 20, 10);
            $table->unsignedBigInteger('market_cap');
            $table->decimal('total_volume', 20, 4);
            $table->decimal('ath', 20, 10);
            $table->decimal('price_change_percentage_24h', 10, 20);
            $table->decimal('price_change_percentage_7d', 10, 20);
            $table->decimal('price_change_percentage_30d', 10, 20);
            $table->timestamps();

            $table->foreign('coin_id')->references('id')->on('coins');
            $table->foreign('fiat_currency_id')->references('id')->on('fiat_currencies');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coin_metrics');
    }
};
