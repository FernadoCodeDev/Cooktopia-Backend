<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        $rules = [
            'name' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'price' => ['required', 'numeric', 'min:0'],
            'categories_id' => ['required', 'exists:categories,id'],
            'status' => ['required', 'string'],
        ];


        if ($this->isMethod('POST')) {
            $rules['image'] = ['required', 'image', 'mimes:jpeg,png,jpg,webp', 'max:2048'];
        }

        /*
        Use when HTTP is PUT to update, check if the image already exists
        */

        if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
            $rules['image'] = ['nullable', 'image', 'mimes:jpeg,png,jpg,webp,gif,svg', 'max:2048'];
        }

        return $rules;
    }
}
