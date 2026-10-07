import { NextRequest, NextResponse } from "next/server";
import { staticProjects } from "@/data/staticProjects";

// GET /api/projects - Mengambil semua data proyek
export async function GET() {
  return NextResponse.json(staticProjects);
}

// POST /api/projects - Mengirim pesan / data kontak
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Simpan ke "database" (mock)
    const contactMessage = {
      id: crypto.randomUUID(),
      name,
      email,
      message,
      read: false,
      createdAt: new Date(),
    };

    return NextResponse.json(
      {
        success: true,
        message: "Pesan Anda berhasil terkirim!",
        data: contactMessage,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Format request tidak valid" },
      { status: 400 }
    );
  }
}