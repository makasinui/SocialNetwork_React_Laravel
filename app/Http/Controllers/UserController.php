<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Http\Resources\UsersResource;

class UserController extends Controller
{
    public function checkAuthorize()
    {
        if(Auth::check()){
            return Auth::user();
        } else {
            return response('Unauthorized');
        }
    }

    public function index()
    {
        return UsersResource::collection(User::get());
    }

    public function show($id)
    {
        return new UsersResource(User::findOrFail($id));
    }

}

