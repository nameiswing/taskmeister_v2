<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $table = 'task';

    protected $primaryKey = 'id';

    protected $fillable = ['task_name', 'task_summary'];

    public function project() {
        return $this->belongsTo(Project::class);
    }

    public function status() {
        return $this->belongsTo(Status::class);
    }

    public function users() {
        return $this->belongsToMany(User::class);
    }
}
