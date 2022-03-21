<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(Request $request)
    {
        if(Auth::check()){
            return Auth::user();
        } else {
            return response('Unauthorized');
        }
        
    }
}

