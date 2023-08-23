<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required|unique:products|max:255",
            "description" => "required",
            'brand' => 'required',
            "cost_price" => 'required',
            "selling_price" => 'required',
            "minimum_stock" => 'required',
            "total_stock" => 'required',
            'image' => 'nullable|image|mimes:jpeg,jpg,png,svg,webp|max:2000',
        ];
    }
}
