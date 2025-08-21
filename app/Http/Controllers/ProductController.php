<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
 
    public function index()
    {
        return Product::all();
    }

    public function create()
    {
        //
    }

    public function store(ProductRequest $request)
    {
        $product = Product::created($request->validated());
        return response()->json($product, 201);

    }

    public function show(Product $id)
    {
        return $product;
    }

    public function edit(string $id)
    {
        //
    }

    public function update(ProductRequest $request, Product $id)
    {
        $product->update($request->validate());
        return response()->json($product, 200);
    }


    public function destroy(string $id)
    {
        //
    }
}
