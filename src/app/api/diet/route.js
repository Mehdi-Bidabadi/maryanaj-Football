import diet from "@/models/Diet";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(req){
    try{
        await connectDB();

        const dietData = await diet.find({published: true})
        
        return NextResponse.json({data: dietData},{status: 200})
    }catch(err){
        return NextResponse.json({message: "مشکلی در سرور رخ داده است"},{status: 500})
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

        const newDiet = await diet.create({title: title, description: description});
        console.log(newDiet);

        return NextResponse.json({
            message: "اطلاعات با موفقیت ذخیره شد",
           
        },{status: 201})
    }catch(err){
        console.log(err);
        return NextResponse.json(
          { error: "مشکلی در سرور رخ داده است" },
          {
            status: 500,
          }
        )
    }
}