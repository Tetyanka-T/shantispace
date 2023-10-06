import connectMongoDb from "../../../../libs/mongodb";
import { NextResponse } from "next/server";
import Article from "../../../../models/article";

export const PUT = async (request, { params }) => {
  try {
    const { id } = params;
    const newArticle = await request.json();
    await connectMongoDb();
    await Article.findByIdAndUpdate(id, newArticle);
    return NextResponse.json({ message: "success updated" }, { status: 200 });
  } catch (error) {
    return NextResponse("Not found posts");
  }
};

export const GET = async (request, { params }) => {
  try {
    const { id } = params;
    await connectMongoDb();
    const article = await Article.findById(id);
    return NextResponse.json({ article }, { status: 200 });
  } catch (error) {
    return NextResponse("Not found posts");
  }
};
