"use client"
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Profile = () => {

    const router = useRouter();

    const onLogout = async (e) => {
        e.preventDefault();

        //API CALL
        const response = await axios.get('/api/users/logout');

        if (response.status === 200){
            router.push('/login');
        }
    }

    return (
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white px-16 pt-8 pb-12 mb-4">

                <h1 className="text-4xl text-fuchsia-700 mb-1 text-center">Welcome to Home Page</h1>

                <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 "></div>
                <p className="mb-2 mt-2 text-center text-fuchsia-600">Welcome to My personalised Home <br />you can view and manage account information</p>             
                    <button 
                        className="bg-rose-500 hover:bg-rose-600 text-gray-200 py-2 px-4  mt-4 rounded-full w-full"
                        onClick={(e) => onLogout(e)}
                    >
                        Logout
                    </button>
            </div>
        </div>
    )
}
export default Profile;