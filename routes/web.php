<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

//Create 
Route::get('/CreatePage', [ProductController::class, 'Create']);

Route::post('/products', [ProductController::class, 'store']);

//Read
Route::get('/', [ProductController::class, 'index']);

//Update
Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');

Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');


/*
Route::get('/CreatePage', function () {
    return Inertia::render('CreatePage');
});
*/

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
