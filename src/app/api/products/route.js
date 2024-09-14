import { NextResponse } from "next/server";
import dbConnect from "../../lib/dbConnect";
import User from "../../model/User";

export  async function GET(req) {
  await dbConnect();
  const user = new User({name:"Ayush",email:"Ayush@123",password:"123"})
  await user.save()
  return  NextResponse.json({"msg":"Hello MextJS API" , user:user})
}

