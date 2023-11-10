import { NextResponse } from "next/server";
import User from "../../../models/user";
import connectMongoDb from "../../../libs/mongodb";
import bcrypt from "bcryptjs";

export const GET = async (req) => {
  const { email, password } = await req.json();
  try {
    await connectMongoDb();
    const user = await User.findOne({ email }, "_id, email, password");
    if (!user || !bcrypt.compare(password, user.password)) {
      throw new Error("Invalid credentials");
    }
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse("Not found posts" + error, { status: 500 });
  }
};
