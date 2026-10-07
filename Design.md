# UI & Component Design Specification

## 1. Directory & File Structure (Next.js App Router)

```text
src/
├── app/
│   ├── api/
│   │   ├── projects/
│   │   │   ├── route.ts
│   │   │   └── [id]/route.ts
│   │   └── contact/route.ts
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── SelectedWorkSection.tsx
│   │   ├── CapabilitiesSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDetailModal.tsx
│   │   ├── StatusBadge.tsx
│   │   └── ServiceAccordion.tsx
│   └── data/
│       └── staticProjects.ts