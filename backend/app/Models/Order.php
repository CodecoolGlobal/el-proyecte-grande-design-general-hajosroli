<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'status',
        //I had to add user_id, but talk about this, please!!!!!!!!!!!!!!!!
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function getTotalValueAttribute()
    {
        return $this->products->sum('price');
    }
}