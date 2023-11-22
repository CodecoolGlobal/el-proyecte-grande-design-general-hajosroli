<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Mockery\Exception;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            return Product::query()->get();
        }
        catch (Exception $exception){
            echo 'Error getting all products: ' . $exception->getMessage();
            throw $exception;
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            return Product::create($request->all());
        }
        catch (Exception $exception) {
            echo 'Error saving product: ' . $exception->getMessage();
            throw $exception;
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            return Product::find($id);
        }
        catch (Exception $exception) {
            echo 'Error getting product with id: ' . $id . ', ' . $exception->getMessage();
            throw $exception;
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $product = Product::find($id);
            $product->update($request->all());
            return $product;
        }
        catch (Exception $exception) {
            echo 'Error updating product with id: ' . $id . ', ' . $exception->getMessage();
            throw $exception;
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) : void
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();
        }
        catch (Exception $exception) {
            echo 'Error deleting product with id: ' . $id . ', ' . $exception->getMessage();
        }

    }
}
