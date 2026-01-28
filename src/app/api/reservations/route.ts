import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { name, email, date, time, guests } = body;

  if (!name || !email || !date || !time || !guests) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }


  console.log("New Reservation:", body);

  return NextResponse.json(
    {
      message: "Reservation created successfully",
      reservation: body,
    },
    { status: 201 }
  );
}
