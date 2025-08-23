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
        return Inertia::render('CreatePage', [
            'categories' => $categories,
        ]);
    }

    public function store(ProductRequest $request)
    {

        $product = Product::create($request->validated());

        // image
        //Images are stored in a folder and renamed to add it to the database.
        if ($request->hasFile('image')) {
            // Unique name for images
            $filename = uniqid() . '.' . $request->file('image')->getClientOriginalExtension();

            // Store the image in storage/app/public/images
            $path = $request->file('image')->storeAs('images', $filename, 'public');

            $product->image = $path;
            $product->save();
        }

        return redirect()->back()->with('success', 'Producto creado correctamente');
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
