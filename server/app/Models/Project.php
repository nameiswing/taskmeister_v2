<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $table = 'projects';

    protected $primaryKey = 'id';

    protected $fillable = ['project_name', 'project_summary', 'token'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function task() {
        return $this->hasMany(Task::class);
    }

    public function status() {
        return $this->belongsTo(Status::class);
    }
}
