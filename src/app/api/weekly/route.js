import weekly from "@/models/Weekly";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(){
    try{
        await connectDB();

        const weeklyData = await weekly.find({published: true})
        
        return NextResponse.json({data: weeklyData},{status: 200})
    }catch(err){
        return NextResponse.json({data: weeklyData},{status: 500})
    }
}

export async function POST(req){

    try{
        await connectDB()

        const {title, description} = await req.json();
        if(!title || !description){
            return NextResponse.json({
                message: "اطلاعات را کامل پر کنید"
            },{status: 422});
        };

        const newweekly = await weekly.create({title: title, description: description});
        console.log(newweekly);

        return NextResponse.json({
            message: "اطلاعات با موفقیت ذخیره شد"
        },{status: 201})
        
    }catch(err){
        console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      {
        status: 500,
      }
    )}
}

