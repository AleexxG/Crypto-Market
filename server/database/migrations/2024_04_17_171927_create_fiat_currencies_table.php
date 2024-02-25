<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('fiat_currencies', function (Blueprint $table) {
            $table->id();
            $table->string('code', 10);
            $table->decimal('rate', 25, 15);
            $table->string('country', 10);
            $table->string('flag');
            $table->timestamps();
        });

        Artisan::call('db:seed', [
            '--class' => 'FiatCurrencySeeder',
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fiat_currencies');
    }
};
