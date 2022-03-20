<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function showUsername()
    {
        if (Auth::check()) {
            return view('welcome', ['user' => Auth::user()->name]);
        }
    }
}

