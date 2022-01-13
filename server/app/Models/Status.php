<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    use HasFactory;

    protected $table = 'status';

    protected $primaryKey = 'id';

    protected $fillable = ['status_name'];

    public function project() {
        return $this->hasOne(Project::class);
    }
    
    public function task() {
        return $this->hasOne(Task::class);
    }
}
