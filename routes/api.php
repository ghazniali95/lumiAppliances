<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/categories', [\App\Http\Controllers\BubbleAPIController::class, 'categories']);
Route::get('/products', [\App\Http\Controllers\BubbleAPIController::class, 'products']);
Route::get('/products/{slug}', [\App\Http\Controllers\BubbleAPIController::class, 'productDetail']);
Route::get('/gallery-categories', [\App\Http\Controllers\BubbleAPIController::class, 'galleryCategories']);
Route::get('/gallery', [\App\Http\Controllers\BubbleAPIController::class, 'gallery']);
