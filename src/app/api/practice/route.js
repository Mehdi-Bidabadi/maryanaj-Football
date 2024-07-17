import Program from "@/models/Program";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";


export async function GET(req){
    try{
        await connectDB();

        const session = await getServerSession(authOptions)
        console.log(session,"mehdi")

        const newPractice = await Program.find({published: true})
        

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