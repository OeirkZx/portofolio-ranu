import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ranu Kumbolo | Medical Informatics & AI",
  description:
    "Portfolio of Ranu Kumbolo — Medical Informatics Student, IT Lab Assistant, Web Dev, AI & Machine Learning Enthusiast. Bridging Healthcare & Artificial Intelligence.",
  keywords: [
    "Medical Informatics",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "AI",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-navy-950 text-gray-100`}
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}
