<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return Inertia::render('Home');
});

/*
Route::get('/product', function () {
    return Inertia::render('Product');
});

Route::get('/checkout', function () {
    return Inertia::render('Checkout');

*/




require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
