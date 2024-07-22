import User from "@/models/user";
import bcryptjs from "bcryptjs";
import Connection from "@/database/config";
import { connection } from "mongoose";

Connection();

export const POST = async (NextRequest) => {
    try{
        const body = await NextRequest.json();
        console.log(body);

        const {name , username, password} = body;

        if (!name || !username || !password){
            return new Response("name, username and password is required", { status: 401});
        
        }
        //returns only one document
         const user = await User.findOne({username});
         if (user){
            return new Response("Username already exist", { status:400});

         }

         const salt = await bcryptjs.genSalt(12);
         const hashedPassword = await bcryptjs.hash(password, salt);

         const newUser = new User({
            name, 
            username,
            password: hashedPassword,
         })

         await newUser.save();

         return new Response("User saved Successfully", { status: 200});

    }catch(error){
        console.log(error);
        return new Response("Something went wrong", { status:500 });

    }

}