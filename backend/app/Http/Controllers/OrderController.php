<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mockery\Exception;
use App\Models\Order;

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
            echo 'Error getting all orders: ' . $exception->getMessage();
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
            return Order::create($request->all());
        }
        catch (Exception $exception) {
            echo 'Error saving a new order: ' . $exception->getMessage();
            throw $exception;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            return Order::find($id);
        }
        catch (Exception $exception) {
            echo 'Error displaying order with id ' . $id . ', ' . $exception->getMessage();
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
            $order = Order::find($id);
            $order->update($request->all());
            return $order;
        }
        catch (Exception $exception) {
            echo 'Error updating order with id : ' . $id . ', ' . $exception->getMessage();
            throw $exception;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) : void
    {
        try {
            Order::delete($id);
        }
        catch (Exception $exception) {
            echo 'Error deleting order with id: ' . $id . ', '. $exception->getMessage();
            throw $exception;
        }
    }
}
