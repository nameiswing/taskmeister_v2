<?php

use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/create-user', [UserController::class, 'store']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/auto-login', [UserController::class, 'autoLogin']);
Route::post('/save-project', [ProjectController::class, 'store']);
Route::get('/projects', [ProjectController::class, 'index']);
// Route::get('/find/{user}', [UserController::class, 'find']);
