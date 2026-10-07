# Product Requirement Document (PRD) - Personal Portfolio Website

## 1. Project Overview
- **Project Name:** Personal Portfolio Website
- **Type:** Single-Page Application (SPA)
- **Architecture:** Monolith Decoupled (Next.js App Router + Route Handlers)
- **Design Style:** Minimalist Monochrome (Grey/White/Black), Glassmorphism, Floating UI Elements, Clean Spacing[cite: 3, 5, 7].

---

## 2. Technical Stack & Architecture

### Core Tech Stack
- **Framework:** Next.js (App Router, ReactJS)
- **Styling:** Tailwind CSS + Framer Motion (micro-interactions & smooth animations)
- **Icons:** Lucide React
- **Backend:** Next.js Route Handlers (Decoupled REST API)
- **Database/ORM:** SQLite/PostgreSQL with Prisma or Drizzle ORM
- **API Specs:** Swagger / OpenAPI JSON (`/api/docs`)[cite: 1, 2]

### Architectural Pattern: Monolith Decoupled
- **Monorepo structure:** Client UI and API logic reside in the same codebase but are strictly separated via `/app/api` routes.
- **Data Flow:** Client components fetch data asynchronously from internal REST API endpoints.

---

## 3. UI/UX Structure & Page Layout (Single-Page)

### 3.1 Header / Navbar
- **Brand / Logo:** Developer Name / Logo mark[cite: 7].
- **Navigation Links:** Smooth scroll anchors (`#work`, `#services`, `#contact`).
- **Status Badge:** Floating pill button with live indicator ("Available for New Project")[cite: 7].

### 3.2 Hero Section
- **Typography:** Large, bold monochrome headline[cite: 7].
- **Role Title:** Web Developer (ReactJS / NextJS)[cite: 7].
- **Tagline:** Focus on clean architecture, modern web development, and decoupled design systems.
- **CTA Elements:** Primary button ("Let's collaborate") + Social Links (GitHub, LinkedIn, Instagram, etc.)[cite: 7].

### 3.3 Selected Work / Portfolio Section (`#work`)
- **Filter Tabs:** All, Real Project, Exploration[cite: 6].
- **Layout:** 2-Column Grid of Project Cards[cite: 6].
- **Interactive Feature:** Clicking a project card triggers a **Slide-over Drawer / Fullscreen Modal** containing the detailed case study.
- **Case Study Modal Specs (per project):**
  1. Summary & Problem Statement
  2. Architecture & Tech Stack Badges
  3. UI / Mockup / Interactive Preview[cite: 2]
  4. Database Design / ERD Diagram Representation[cite: 1, 2]
  5. API Endpoint Documentation Summary[cite: 1, 2]

### 3.4 Capabilities & Tech Stack Section (`#services`)
- **Visual Style:** Accordion / Horizontal Expansion Card (adopted from `/SERVICE` design reference)[cite: 5].
- **Categories:**
  - **Frontend Development:** Next.js, ReactJS, Tailwind CSS, Framer Motion, Responsive Design.
  - **Backend & API Architecture:** Node.js, Route Handlers, REST API Design, Database ORM, Swagger/Postman[cite: 1, 2].

### 3.5 Contact & Footer Section (`#contact`)
- **Headline:** "HAVE A PROJECT IN MIND?" (Large impact text)[cite: 3].
- **Interactive Form:** Name, Email, Message input with validation.
- **Quick Links:** Social media pills & Direct Email copy action[cite: 3].

---

## 4. API Endpoints Specification

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/projects` | Fetch list of all 3 portfolio projects with metadata |
| `GET` | `/api/projects/:id` | Fetch full case study details (PRD summary, ERD, API specs) for Modal view |
| `POST` | `/api/contact` | Process contact form submission and send notification |
| `GET` | `/api/docs` | Serve OpenAPI / Swagger documentation spec[cite: 1, 2] |

---

## 5. Non-Functional Requirements & Design Guidelines
- **No AI Slop:** Direct, crisp copywriting; custom interactive hover states; strict monochrome design palette (avoid default generic AI glowing gradients).
- **Responsiveness:** Fully optimized for Mobile, Tablet, and Desktop displays.
- **Performance:** Optimized images, lazy-loaded modal contents, fast First Contentful Paint (FCP).