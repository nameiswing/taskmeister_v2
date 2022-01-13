<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'email_address' => 'required | email | min:6',
            'password' => 'required | min:6'
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 400, 'errors' => $validator->errors(), 'test'=>$request->password]);
        } else {
            $hashedPassword = Hash::make($request->input('password'));

            $userProfile = new User();
            $userProfile->first_name = $request->input('first_name');
            $userProfile->middle_name = $request->input('middle_name', '');
            $userProfile->last_name = $request->input('last_name');
            $userProfile->nickname = $request->input('nickname', 'User');
            $userProfile->email_address = $request->input('email_address');
            $userProfile->password = $hashedPassword;
            $userProfile->access_type = $request->input('access_type', 'admin');
            $userProfile->avatar_seed = $userProfile->first_name[0] .' '. $userProfile->last_name[0];
            $userProfile->api_token = Str::random(60);
            $userProfile->save();

            return response()->json(['status' => 200, 'message' => 'Profile created successfully.']);
        }
    }

    /**
     * Display the specified resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request){
        $credentials = $request->validate([
            'email_address' => 'required | email | min:6',
            'password' => 'required | min:6'
        ]);
        $user = User::where('email_address', $request['email_address'])->get();
        $auth = Auth::attempt($credentials);

        if($auth){
            return response()->json([
                'status' => 200,
                'message' => 'Logged in successfully!',
                'api_token' => $user[0]->api_token,
            ]);
        } else {
            return response()->json(['status' => 400, 'message' => 'Incorrect password or email.']);
        }
    }

    /**
     * Display the specified resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function autoLogin(Request $request){
        $tokenCheck = User::where('api_token', $request['token'])->get();

        if($tokenCheck){
            return response()->json(['status'=>200, 'message' => 'Successfully logged in.']);
        } else {
            return response()->json(['status'=>404, 'message' => 'You are not logged in.'.$tokenCheck]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     * @param  @param  str  $email_address
     * @return \Illuminate\Http\Response
     */
    public function find($email_address)
    {
        if(Auth::check()) {
            return User::where('email_address', $email_address)->get();
        }
    }
    /**
     * Remove the specified resource from storage.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    /**
     * Remove the specified resource from storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request  $request) {
        Auth::logout();
        $request->session()->invalidate();

        $request->session()->regenerateToken();
    }
}
