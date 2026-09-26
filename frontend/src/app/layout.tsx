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
    "Shattajit Ghosh — Full Stack Software Engineer specializing in ASP.NET Core, React/Next.js, scalable APIs, and AI-integrated systems.",
};

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t)document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${geistMono.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full bg-bg font-sans text-text">
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
