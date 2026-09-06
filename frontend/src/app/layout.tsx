import type { Metadata } from "next";
import { Geist_Mono, Manrope, JetBrains_Mono } from "next/font/google";
import BackgroundFX from "@/components/BackgroundFX";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shattajit Ghosh | Software Engineer",
  description:
    "Shattajit Ghosh — Backend Software Engineer specializing in ASP.NET Core, scalable APIs, and AI-integrated systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg font-sans text-text">
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
