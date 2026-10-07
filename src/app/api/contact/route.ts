import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest
) {
  const body = await request.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  // Mock: simpan ke database (akan digantikan oleh Prisma/Drizzle saat deployment)
  const contactMessage = {
    id: crypto.randomUUID(),
    name,
    email,
    message,
    read: false,
    createdAt: new Date(),
  };

  return NextResponse.json(
    { success: true, message: "Pesan Anda berhasil terkirim!", data: contactMessage },
    { status: 201 }
  );
}