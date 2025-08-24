<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Inertia\Inertia; //Inertia for React 

class ProductController extends Controller
{

    public function index()
    {
        $products = Product::all(); /*Products */

        $categories = Category::all(); /*Categories id and name */

        return Inertia::render('Home', [
            'products' => $products,
            'categories' => $categories,
        ]);
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

        return redirect()->back()->with('success', 'Producto creado');
    }

    public function show(Product $product)
    {
        return $product;
    }

    public function edit(Product $product)
    {
         $categories = Category::all();

        return Inertia::render('UpdatePage', [
            'product' => $product, 
            'categories' => $categories,
        ]);
    }
    public function update(ProductRequest $request, Product $product)
    {
        $validatedData = $request->validated();

        if ($request->hasFile('image')) {
            if ($product->image && Storage::disk('public')->exists($product->image)) {
                Storage::disk('public')->delete($product->image);
            }
          
            $filename = uniqid() . '.' . $request->file('image')->getClientOriginalExtension();
            $path = $request->file('image')->storeAs('images', $filename, 'public');
            $validatedData['image'] = $path; 
        } else {
          
        }
        $product->update($validatedData);

        return back()->with('success', 'producto actualizado');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(null, 204);
    }
}
