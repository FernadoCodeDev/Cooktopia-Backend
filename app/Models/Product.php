<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Category;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
         'name',
         'description',
         'price',
         'status',
         'image',
        'categories_id'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'categories_id');
    }

}
