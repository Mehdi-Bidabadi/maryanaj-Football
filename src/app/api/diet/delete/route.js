import diet from "@/models/Diet";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        await connectDB();

        const {id} = await req.json()
        const x = String(id)
        const dietOne = await diet.find({_id: x})
        
        const newDiet = await diet.deleteOne({_id: x})
        console.log(newDiet)
        return NextResponse.json({data: newDiet},{status: 200})
        
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