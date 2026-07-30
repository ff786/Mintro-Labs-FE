import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mintro Labs | Premium Digital Agency",
  description:
    "Mintro Labs helps businesses build premium digital brands through design, websites, software, and AI-powered experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-white font-sans text-[#111111] antialiased">{children}</body>
    </html>
  );
}
