import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mhd-sajad.github.io"),
  title: "Muhammed Sajad · AI/ML Engineer",
  description:
    "Portfolio of Muhammed Sajad — AI/ML Engineer building intelligent systems that retrieve, rank, and predict. Dual-track engineer at Brototype and IIT Madras BS Data Science.",
  keywords: [
    "Muhammed Sajad",
    "Sajad ML",
    "AI Engineer",
    "Machine Learning Engineer",
    "RAG",
    "ChromaDB",
    "FastAPI",
    "IIT Madras",
    "Brototype",
  ],
  authors: [{ name: "Muhammed Sajad" }],
  creator: "Muhammed Sajad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mhd-sajad.github.io/Portfolio/",
    title: "Muhammed Sajad · AI/ML Engineer",
    description:
      "Building systems that retrieve, rank, and predict. Dual-track engineer at Brototype & IIT Madras.",
    siteName: "Muhammed Sajad Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Muhammed Sajad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Sajad · AI/ML Engineer",
    description:
      "Building systems that retrieve, rank, and predict. Dual-track engineer at Brototype & IIT Madras.",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col selection:bg-violet-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
