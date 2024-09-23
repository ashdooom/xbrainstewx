import { NextResponse } from "next/server";

let comments = []; 
export async function POST(req) {
  const { comment } = await req.json();


  comments.push({ comment });

  return NextResponse.json({ comment }, { status: 200 });
}
