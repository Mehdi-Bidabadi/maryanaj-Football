import Program from "@/models/Program";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";


export async function GET(){
    try{
        await connectDB();

        const newPractice = await Program.find({published: true})
        console.log(newPractice)

        return NextResponse.json({data: newPractice},{status: 200})
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

export async function POST(req){
    try{
        await connectDB();

        const {stadium, description , time , day} = await req.json();

        if(!stadium || !day || !time){
            return NextResponse.json({message: "اطلاعات را کامل وارد کنید"},{status: 422})
        }

        const newPractice = await Program.create({title: stadium, description: description, watch: time, day: day})
        console.log(newPractice);

        return NextResponse.json({
            message: "اطلاعات با موفقیت ثبت شد",
            data: newPractice,
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