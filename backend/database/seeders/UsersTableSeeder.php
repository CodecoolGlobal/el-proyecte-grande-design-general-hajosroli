<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Test User 1',
                'email' => 'test1@email.com',
                'password' => Hash::make('1234')
            ],
            [
                'name' => 'Test User 2',
                'email' => 'test2@user.com',
                'password' => Hash::make('password')
            ],
            [
                'name' => 'Test User 3',
                'email' => 'testuser@email.com',
                'password' => Hash::make('asdf')
            ]
        ];

        DB::table('users')->insert($users);
    }
}
