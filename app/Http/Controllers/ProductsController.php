<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Products;
use Illuminate\Http\Request;

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
    public function store(Request $request)
    {

        // protected $fillable =['name','description','brand','cost-price','selling-price','image','total-stock','minimum-stock'];
        $request->validate(
            [
                "name" => "required|unique:products|max:255",
                "description" => "required",
                'brand' => 'required',
                "cost_price" => 'required',
                "selling_price" => 'required',
                "minimum_stock" => 'required',
                "total_stock" => 'required',
                "image" => 'required|image|mimes:jpeg,png,jpg,gif,svg'
            ]
        );
        $requestedData = $request->all();

        // dd($requestedData['image']);
        // $image1 = Image::make($request->file('image'));
        // $image1->resize(800, 800, function ($constraint) {
        //     $constraint->aspectRatio();
        //     $constraint->upsize();
        // });
        // $imageName =  time() . '_' . $request->image->getClientOriginalName();
        // $image1->save(public_path('images/' . $imageName));
        // $requestedData['image'] = $imageName;


        $imageName =  time() . '_' . $request->image->getClientOriginalName();
        // $requestedData['image']->move(public_path('images/' . $imageName));
        $request->file('image')->storeAs('public/images', $imageName);
        //stores in /storage/app/public/iumages/
        // dd($imageName);
        $requestedData['image'] = $imageName;



        Products::create($requestedData);
        return redirect("/product")->with('alert-success', 'Product created successfully.');
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
    public function update(Request $request, Products $product)
    {
        // dd($request->all());
        $request->validate(
            [
                "name" => "required|max:255",
                "description" => "required",
                'brand' => 'required',
                "cost_price" => 'required',
                "selling_price" => 'required',
                "minimum_stock" => 'required',
                "total_stock" => 'required',
                "image" => 'nullable'
            ]
        );
        dd("---->request: ", $request->all());
        // $product = Products::find($request->id);
        $requestedData = $request->all();
        // dd($request);
        if ($request->image !== null) {
            // unlink(public_path('images/' . $product->image));
            dd("image received");
            unlink(base_path('/storage/app/public/images/' . $product->image));
            $imageName =  time() . '_' . $request->image->getClientOriginalName();
            $request->file('image')->move(public_path('images'), $imageName);
            $requestedData['image'] = $imageName;
        } else {
            dd("image Not received");
            $requestedData = $request->except('image');
        }

        // dd(gettype($request), $requestedData);

        $product->update($requestedData);
        return redirect("/product")->with('alert-success', 'Product Updated Success fully successfully.');
    }
    public function destroy(Request $request)
    {
        $product = Products::find($request->id);
        if (asset('images/' . $product->image)) {
            unlink(base_path('/storage/app/public/images/' . $product->image));
        } else {
            return "no such file";
        }
        $product->delete();
        return redirect("/product")->with('alert-success', 'Product deleted successfully.');
    }
}
