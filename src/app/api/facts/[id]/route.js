import connectDB from "@/lib/mongodb";
import Facts from "@/models/facts";
import { NextResponse } from "next/server";

export async function GET(request) {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  console.log("id");

  await connectDB();

  try {
    const data = await Facts.findById(id).select("facts");
    return NextResponse.json({ message: "success", data });
  } catch (error) {
    return NextResponse.json({ message: "Error Finding Facts", error });
  }
}
