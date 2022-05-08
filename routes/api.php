<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\LikesController;
use App\Http\Middleware\User;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/current',[UserController::class,'checkAuthorize']);

Route::resources([
    'news' => NewsController::class
]);

Route::resources([
    'users' => UserController::class
]);

Route::resources([
    'likes' => LikesController::class
]);

