<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;


class TestController extends Controller {
        public function show() 
        {
            
            return Auth::user();
        }
    }
?>