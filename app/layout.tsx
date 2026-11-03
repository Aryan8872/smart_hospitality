import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SHM | Smart Hospitality Management Group",
  description:
    "Independent hospitality assessments, practical training, operational excellence, and measurable improvement plans for hotels, resorts, and restaurants.",
  icons: {
    icon: [
      { url: "/brand_logo/shmg.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/brand_logo/shmg.png",
    apple: "/brand_logo/shmg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FBFAF7] text-[#12281A] font-sans selection:bg-[#42A85D] selection:text-black min-h-screen">
        {children}
      </body>
    </html>
  );
}
