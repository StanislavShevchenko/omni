<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class main extends Controller
{
    public function index(Request $request)
    {		
		if (0 === strpos($request->headers->get('accept'), 'application/json'))
			return response()->json();
		
		return view('index');

    }
}
