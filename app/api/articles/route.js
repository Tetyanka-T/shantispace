import { NextResponse } from "next/server";
import Article from "../../../models/article";
import connectMongoDb from "../../../libs/mongodb";

export const GET = async (request) => {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    const result = await Article.findById(id);
    return NextResponse.json({ result });
  } catch (error) {
    return NextResponse("Not found posts" + error, { status: 500 });
  }
};

// export const GET = async () => {
//   try {
//     await connectMongoDb();
//     const articles = await Article.find();
//     return NextResponse.json({ articles });
//   } catch (error) {
//     return NextResponse("Not found posts" + error, { status: 500 });
//   }
// };

export const POST = async (request) => {
  try {
    const newArticle = await request.json();
    await connectMongoDb();
    await Article.create(newArticle);
    return NextResponse.json({ message: "create post" }, { status: 201 });
  } catch (error) {
    return NextResponse("Not found posts");
  }
};

export const DELETE = async (request) => {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Article.findByIdAndDelete(id);
    return NextResponse.json({ message: "success delete" }, { status: 200 });
  } catch (error) {
    return NextResponse("Not found posts");
  }
};
