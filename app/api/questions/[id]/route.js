import connectMongoDb from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import Question from "../../../../models/question";

export const PUT = async (request, { params }) => {
  try {
    const { id } = params;
    const question = await request.json();
    await connectMongoDb();
    await Question.findByIdAndUpdate(id, question);
    return NextResponse.json({ message: "success updated" }, { status: 200 });
  } catch (error) {
    return NextResponse("Not found posts");
  }
};

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    await connectMongoDb();
    const question = await Question.findById(id);
    return NextResponse.json({ question }, { status: 200 });
  } catch (error) {
    return NextResponse("Not found question");
  }
};
