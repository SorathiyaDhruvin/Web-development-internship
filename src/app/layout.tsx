import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Itzfizz Digital | Premium Agency",
  description: "Web development internship assignment for Itzfizz Digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans antialiased min-h-screen bg-black text-white selection:bg-indigo-500/30 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
