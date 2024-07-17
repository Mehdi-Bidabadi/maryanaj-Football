import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";


export async function GET(){
    try{
        await connectDB();

        const user = await User.find({role: "ADMIN"})
        console.log(user)

        return NextResponse.json({data: user},{status: 200})

    }catch(err){
        console.log(err)
        return NextResponse.json({
            message: "مشکلی در سرور رخ داده است"
        },
        {
            status: 500
        })
    }
}