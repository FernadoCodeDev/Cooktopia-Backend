<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

Route::get('/', function () {
    return Inertia::render('Home');
});


//Create 
Route::get('/Admin', [ProductController::class, 'create']);

Route::post('/products', [ProductController::class, 'store']);

Route::get('/Admin', function () {
    return Inertia::render('Admin');
});
/*
Route::post('/categories', [CategoryController::class, 'store']);
*/

Route::get('/UpdateAdmin', function () {
    return Inertia::render('UpdateAdmin');
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
