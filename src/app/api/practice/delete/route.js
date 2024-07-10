import Program from "@/models/Program";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        await connectDB();

        const {id} = await req.json();

        const newPractice = await Program.deleteOne({_id: id});
        console.log(newPractice)
        return NextResponse.json({message: "اطلاعات خواسته شده حذف شد"},{status: 200})
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