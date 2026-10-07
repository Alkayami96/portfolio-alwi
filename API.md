# Database Schema & API Specification (Decoupled Backend)

## 1. Database Schema (Prisma / Drizzle ORM)

### Models & Entities

```prisma
// Schema representation for Prisma ORM

model Project {
  id           String   @id @default(cuid())
  slug         String   @unique
  title        String
  category     String   // "Real Project", "Exploration", etc.
  description  String
  thumbnailUrl String
  liveUrl      String?
  githubUrl    String?
  prdSummary   String   // Text/Markdown ringkas PRD
  techStack    String[] // Array of strings e.g. ["Next.js", "Tailwind", "Prisma"]
  erdDiagram   String?  // Diagram representation/URL
  apiSpecDoc   String?  // OpenAPI/Swagger JSON or URL
  featured     Boolean  @default(false)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}

model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  message   String
  read      Boolean  @default(false)
  createdAt DateTime @default(now())
}

2. API Endpoints Specification
2.1 Get All Projects
Endpoint: GET /api/projects

Description: Mengambil daftar semua proyek untuk tampilan grid utama.

Query Params: ?category=all (opsional)

Response 200 OK:

{
  "success": true,
  "data": [
    {
      "id": "proj_1",
      "slug": "bloomcare-mental-health",
      "title": "BloomCare - Mental Health App",
      "category": "Real Project",
      "description": "Emotional engine for personal growth.",
      "thumbnailUrl": "/images/bloomcare.jpg",
      "techStack": ["Next.js", "Tailwind CSS", "Prisma"],
      "liveUrl": "[https://example.com](https://example.com)",
      "githubUrl": "[https://github.com/example](https://github.com/example)"
    }
  ]
}

2.2 Get Project Case Study Detail (Modal Detail)
Endpoint: GET /api/projects/:id

Description: Mengambil rincian data proyek untuk ditampilkan di dalam Modal / Drawer saat kartu proyek diklik.

Response 200 OK:

{
  "success": true,
  "data": {
    "id": "proj_1",
    "title": "BloomCare - Mental Health App",
    "prdSummary": "Aplikasi ini dirancang untuk pemantauan kesehatan mental dengan arsitektur decoupled...",
    "erdDiagram": "Visual diagram skema ERD untuk entitas user, mood tracker, dan jurnal...",
    "apiSpecDoc": "GET /api/mood, POST /api/mood, GET /api/journal (Dokumentasi Swagger lengkap)",
    "techStack": ["Next.js", "Tailwind CSS", "Prisma", "Swagger"]
  }
}

2.3 Submit Contact Form
Endpoint: POST /api/contact

Description: Menangani pesan masuk dari form kontak di halaman web.

Request Body (Data yang dikirim dari Frontend):

JSON
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Halo, saya tertarik berdiskusi untuk pembuatan web aplikasi."
}

Response 201 Created (Respon dari Backend):

{
  "success": true,
  "message": "Pesan Anda berhasil terkirim!"
}

2.4 Swagger / OpenAPI Specs
Endpoint: GET /api/docs

Description: Menyediakan spesifikasi OpenAPI / Swagger dalam bentuk JSON untuk dokumentasi API.