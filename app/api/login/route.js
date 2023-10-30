import { NextResponse } from "next/server";
import User from "../../../models/user";
import connectMongoDb from "../../../libs/mongodb";

export const GET = async () => {
  try {
    await connectMongoDb();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse("Not found posts" + error, { status: 500 });
  }
};
