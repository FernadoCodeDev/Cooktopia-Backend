<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;

//Create 
Route::get('/CreatePage', [ProductController::class, 'Create']);

Route::post('/products', [ProductController::class, 'store']);

//Read
Route::get('/', [ProductController::class, 'index'])->name('home');

//Update
Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');

Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');

//Delete
Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');


/*
Route::get('/UpdateAdmin', function () {
    return Inertia::render('UpdateAdmin');
});
*/




require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
