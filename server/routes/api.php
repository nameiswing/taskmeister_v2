<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\UserProfileController;


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

// Public routes - create user is supposedly protected... just placed here for example
// Will put this inside protected once models, controllers and migrations are already finalized
Route::post('/create-user', [UserProfileController::class, 'store']);

// Protected routes
Route::group(['middleware' => ['auth:sanctum']], function () {
    //
});



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});