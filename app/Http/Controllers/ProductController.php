<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia; //Inertia for React 

class ProductController extends Controller
{

    public function index()
    {
        return Product::all();
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('AdminCreate', [
            'categories' => $categories,
        ]);
    }

    public function store(ProductRequest $request)
    {
        $product = Product::create($request->validated());
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('products', 'public');
            $product->image = $imagePath;
            $product->save();
        }

        return response()->json($product, 201);
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function edit(string $product)
    {
        //
    }

    public function update(ProductRequest $request, Product $product)
    {
        $product->update($request->validated());
        return response()->json($product, 200);
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
