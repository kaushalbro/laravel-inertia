<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::resource('product',ProductsController::class);
Route::get('/product', [ProductsController::class, 'index'])->name('product.index'); //GET ALL PRODUCTS 
Route::get('/product/create', [ProductsController::class, 'create'])->name('product.create'); //GET ALL PRODUCTS 
Route::get('/product/edit/{id}', [ProductsController::class, 'edit'])->name('product.edit'); //GET ALL PRODUCTS 
Route::post('/product', [ProductsController::class, 'store'])->name('product.store'); //CREATE POSTS
Route::patch('/product/{id}', [ProductsController::class, 'update'])->name('product.update'); //CREATE POSTS
Route::delete('/product/{id}', [ProductsController::class, 'destroy'])->name('product.delete'); //CREATE POSTS
// Route::patch('/product/{id}', [ProductsController::class, 'index'])->name('product.edit'); //CREATE POSTS



