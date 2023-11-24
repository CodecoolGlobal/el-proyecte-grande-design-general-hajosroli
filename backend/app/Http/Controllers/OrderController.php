<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\Request;
use Mockery\Exception;
use App\Models\Order;
use App\Models\User;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            return Order::query()->get();
        }
        catch (Exception $exception) {
            return response('Error getting all orders: ' . $exception->getMessage(), 500);
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
            // Validate the incoming request data
            $request->validate([
                'status' => 'required|in:pending,processing,completed,cancelled',
                'product_ids' => 'required|array',
            ]);

            // Provide a logged-in user
            $user = auth()->user();

            // Create a new order
            $order = Order::create([
                'status' => $request->input('status'),
                'user_id' => $user->id ?? 1
            ]);

            // Attach products to the order
            $order->products()->attach($request->input('product_ids'));

            return response()->json(['order' => $order], 201);
        }
        catch (Exception $exception) {
            return response('Error creating order: ' . $exception->getMessage(), 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            return Order::findOrFail($id);
        }
        catch (Exception $exception) {
            return response('Error displaying order with id ' . $id . ', ' . $exception->getMessage(), 500) ;
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
            $order = Order::findOrFail($id);
            $order->update($request->all());
            return $order;
        }
        catch (Exception $exception) {
            return response('Error updating order with id : ' . $id . ', ' . $exception->getMessage(), 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $order = Order::findOrFail($id);
            $order->delete();
            return response('Deleted', 200);
        }
        catch (Exception $exception) {
            return response('Error deleting order with id: ' . $id . ', '. $exception->getMessage(), 500);
        }
    }
}
