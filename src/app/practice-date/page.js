import PracticePage from "@/components/template/PracticePage"

import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";



async function page() {
  
  await connectDB()

  // const session = await getServerSession(authOptions)
  // console.log(session)

  return (
    <PracticePage />
  )
}

export default page