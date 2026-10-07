import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Alwi Alkautsar | Website Developer",
  description: "Portofolio profesional Alwi Alkautsar - Website Developer spesialis Next.js, React, dan Tailwind CSS.",
  keywords: ["Website Developer", "Frontend Developer", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Alwi Alkautsar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakartaSans.className} bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}