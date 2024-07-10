import weekly from "@/models/Weekly";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        await connectDB();

        const {id} = await req.json()
        const x = String(id)
        const weeklyOne = await weekly.find({_id: x})
        
        const newWeekly = await weekly.deleteOne({_id: x})
        console.log(newWeekly)
        return NextResponse.json({data: "mehdi"},{status: 200})
        
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