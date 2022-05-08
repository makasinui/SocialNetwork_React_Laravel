<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\LikesStoreRequest;
use App\Http\Resources\LikesResource;
use App\Models\Like;

class LikesController extends Controller
{
    public function index()
    {
        return Like::all();
    }

    public function store(LikesStoreRequest $request)
    {
        $created_like = Like::create($request->validated());

        return new LikesResource($created_like);
    }
}
