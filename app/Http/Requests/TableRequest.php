<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TableRequest extends FormRequest
{

    public function authorize(): bool
    {
        return false;
    }


    public function rules(): array
    {
        return [

            /*
            'description' => ['required', 'string', 'max:255'],
            'image'      => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:2048'],
            */
        ];
    }

    public function messages(): array
    {
        return [
            /* 
       'description.required' => 'AAA',
        'image.image'         => 'BBB',
        */
    ];
    }
}
