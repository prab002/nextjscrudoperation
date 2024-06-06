import connectMongoDb from "@/libs/mongoose";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDb();
  await Topic.create({ title, description });
  return NextResponse.json({ msg: "created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDb();
  const topic = await Topic.find();
  return NextResponse.json({ topic });
} 

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDb();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Topic deleted" }, { status: 200 });
}
