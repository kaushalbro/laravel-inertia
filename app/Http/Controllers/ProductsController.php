<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Inertia\Inertia;
use App\Models\Products;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $products = Products::all();
        // return page("products/index");
        return Inertia::render('products/index',  ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('products/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateProductRequest $request)
    {
        // protected $fillable =['name','description','brand','cost-price','selling-price','image','total-stock','minimum-stock'];
        $requestedData = $request->all();
        $image = $request->file('image');
        $imagePath = null;
        if ($request->hasFile('image')) {
            $imageName = time() . '_' . $image->getClientOriginalName();
            // dd($request->file('image'));
            $newImage = Image::make($image)->resize(800, 800, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $imagePath =   $newImage->save(storage_path('/app/public/images/' . $imageName));
            $imageURL = $imagePath ? Storage::url("images/" . $imageName) : null;
            $requestedData['image'] = $imageURL;
        }
        Products::create($requestedData);

        return redirect("/dashboard")->with('alert-success', 'Product created successfully.');
    }
    /**
     * Display the specified resource.
     */
    public function show(Products $products)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $product, Request $request)
    {
        $product = Products::find($request->id);
        return Inertia::render('products/edit',  ['product' => $product]);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Products $product)
    {
        $product = Products::find($request->id);
        $requestedData = $request->all();
        if ($request->image !== null) {
            $image = $request->file('image');
            @unlink(base_path("public/" . $product->image));
            $imageName = time() . '_' . $image->getClientOriginalName();
            $newImage = Image::make($image)->resize(800, 800, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $imagePath =   $newImage->save(storage_path('/app/public/images/' . $imageName));
            $imageURL = $imagePath ? Storage::url("images/" . $imageName) : null;
            $requestedData['image'] = $imageURL;
        } else {
            $requestedData = $request->except('image');
        }
        $product->update($requestedData);
        return redirect("/dashboard")->with('alert-success', 'Product Updated Success fully successfully.');
    }



    public function destroy(Request $request)
    {
        $product = Products::find($request->id);
        if (asset('images/' . $product->image)) {
            @unlink(base_path("public/" . $product->image));
        } else {
            return "no such file";
        }
        $product->delete();
        return redirect("/dashboard")->with('alert-success', 'Product deleted successfully.');
    }
}
