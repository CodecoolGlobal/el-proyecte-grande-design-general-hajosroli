<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Product::truncate();

        $products = [
            [
                'name' => 'strawberry jam',
                'price' => 1200,
                'quantity' => 300
            ],
            [
                'name' => 'apple sauce',
                'price' => 990,
                'quantity' => 400
            ],
            [
                'name' => 'peach chutney',
                'price' => 1680,
                'quantity' => 250
            ],
            [
                'name' => 'plum preserve',
                'price' => 1250,
                'quantity' => 600
            ],
            [
                'name' => 'apricot jam',
                'price' => 1300,
                'quantity' => 90
            ]
        ];

        Product::insert($products);
    }
}
