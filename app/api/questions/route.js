import { NextResponse } from "next/server";
import Question from "@/models/question";
import connectMongoDb from "../../../libs/mongodb";

export const GET = async () => {
  try {
    await connectMongoDb();
    const questions = await Question.find();
    return NextResponse.json({ questions });
  } catch (error) {
    return NextResponse("Not found question" + error, { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const newQuestion = await request.json();
    await connectMongoDb();
    await Question.create(newQuestion);
    return NextResponse.json({ message: "create question" }, { status: 201 });
  } catch (error) {
    return NextResponse("Not found question");
  }
};

export const DELETE = async (request) => {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Question.findByIdAndDelete(id);
    return NextResponse.json({ message: "success delete" }, { status: 200 });
  } catch (error) {
    return NextResponse("Not found posts");
  }
};
