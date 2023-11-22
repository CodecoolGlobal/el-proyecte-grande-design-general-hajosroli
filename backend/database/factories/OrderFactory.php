<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Carbon;

class OrderFactory extends Factory
{
    protected $model = Order::class;

    public function definition(): array
    {
        return [
            'user_id' => function () {
                return User::inRandomOrder()->first()->id;
            },
            'status' => 'pending',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Order $order){
            $products = Product::inRandomOrder()->limit(3)->get(); // Adjust the limit as needed
            foreach ($products as $product) {
                $order->products()->attach($product, ['quantity' => $this->faker->numberBetween(1, 10)]);
            }
            $order->products()->attach($products);
            $order->save();
        });
    }
}
