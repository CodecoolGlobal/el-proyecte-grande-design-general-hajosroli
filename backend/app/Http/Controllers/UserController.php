<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Mockery\Exception;

class UserController extends Controller
{
    public function index(){

        try {
            $users = User::all();
            return response()->json(['users' => $users], 200);
        }
        catch (Exception $exception) {
            return response('Error listing users: ' . $exception->getMessage(), 500);
        }
    }

    public function show(string $id) {

        try {
            $user = User::find($id);
            return response()->json(['user' => $user], 200);
        }
        catch (Exception $exception) {
            return response('Error getting user with id: ' . $id . ', ' . $exception->getMessage(), 500);
        }
    }

    public function update (Request $request, string $id) {

        try {
            $user = User::find($id);
            $user->update($request->all());
            return response()->json(['user' => $user], 200);
        }
        catch (Exception $exception) {
            return response('Error updating user: ' . $exception->getMessage(), 500);
        }
    }

    public function destroy (string $id) {

        try {
            $user = User::find($id);
            $user->delete();
            return response('User deleted', 200);
        }
        catch (Exception $exception) {
            return response('Error deleting user: ' . $exception->getMessage(), 500);
        }
    }
}
