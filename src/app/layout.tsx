import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Dancing Script via link tag in head.tsx

export const metadata = {
  title: "My Agency",
  description: "Creative branding and social media agency",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans bg-white text-black">{children}</body>
    </html>
  );
}
