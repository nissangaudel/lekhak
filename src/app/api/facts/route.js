import generateFacts from "@/lib/gpt";
import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Facts from "@/models/facts";

export async function POST(request) {
  try {
    const { topic, number, user } = await request.json();
    const facts = await generateFacts(number, topic);

    console.log("ID", request);

    await connectDB();

    const createdFacts = await Facts.create({ userEmail: user, facts: facts });

    const createdFactsId = createdFacts._id;

    return NextResponse.json({ factsId: createdFactsId }, { status: 201 });
  } catch (error) {
    console.error("Error creating facts:", error);
    return NextResponse.json({ message: "Internal Error" });
  }
}
