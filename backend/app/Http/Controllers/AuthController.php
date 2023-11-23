<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Composer\DependencyResolver\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'successful' => false,
                'message' => 'Incorrect credentials'
            ]);
        }
        /**@var User $user */
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;
        return response([
            'successful' => true,
            'user' => $user,
            'token' => $token
        ]);
    }

    public function register(RegisterRequest $request)
    {
        $data = $request->validated();
        /**@var User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password'])
        ]);

        return response(compact('user'));
    }

    public function logout(Request $request)
    {
        /**@var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('',204);
    }
}
