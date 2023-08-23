<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Models\Products;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/product', [ProductsController::class, 'index'])->name('product.index'); //GET ALL PRODUCTS 
// Route::get('/product/create', [ProductsController::class, 'create'])->name('product.create'); //GET ALL PRODUCTS 
Route::get('/product/edit/{id}', [ProductsController::class, 'edit'])->middleware(['auth', 'verified'])->name('product.edit'); //get one PRODUCTS 
Route::post('/product', [ProductsController::class, 'store'])->middleware(['auth', 'verified'])->name('product.store'); //CREATE POSTS
Route::post('/product/{id}', [ProductsController::class, 'update'])->middleware(['auth', 'verified'])->name('product.update'); //update product
Route::delete('/product/{id}', [ProductsController::class, 'destroy'])->middleware(['auth', 'verified'])->name('product.delete'); //delete product


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

Route::get('/', function () {
    $products = Products::all();
    return Inertia::render('products/index', compact('products'));
});

Route::get('/dashboard', function () {
    $products = Products::all();
    return Inertia::render('MainDashboard', compact('products'));
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/product/create', [ProductsController::class, 'create'])->name('product.create');
});

require __DIR__ . '/auth.php';
