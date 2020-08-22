<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['namespace'=>'backend','middleware'=>'api'], function () {
    Route::get('/admin/{any}', function () {
        return view("backend.app");
    })->where('any', 'admin/.*');
});
// Route::get('/admin/{any}', function () {
//     return view("backend.app");
// })->where('any', '.*')->middleware('api');
