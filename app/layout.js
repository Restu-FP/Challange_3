// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Mengimpor CSS global
import Navbar from "./components/Navbar"; // Pastikan path ini benar

// Mengatur font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata untuk halaman
export const metadata = {
  title: "My Kisah",
  description: "Portfolio & Skills Showcase",
};

// Komponen RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar />
          <main className="pt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}