import Connection from '@/database/config';
import User from '@/models/user';
import bcryptjs from 'bcryptjs';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

Connection();

//GET API USED
export const GET = async (NextRequest) => {
    try {

        const response = NextResponse.json({ message: "Logout successfull", success:true });
        
        response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
        //return is Compulsory in NEXTJS
        return response;
    } catch (error) {
        console.log( error );
        return new Response("Something went wrong ", { status: 500 });
    }
}