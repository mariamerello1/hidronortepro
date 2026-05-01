import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HidroNortePro — Soluciones en Manejo de Agua",
  description:
    "Empresa especializada en riego automatizado, bombeo solar, montaje de cañerías PEAD y mantenimiento general.",
  metadataBase: new URL("https://hidronortepro.com"),
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "HidroNortePro — Soluciones en Manejo de Agua",
    description:
      "Empresa especializada en riego automatizado, bombeo solar, montaje de cañerías PEAD y mantenimiento general.",
    url: "https://hidronortepro.com",
    siteName: "HidroNortePro",
    images: [
      {
        url: "/images/logo-hidronorte.jpg",
        width: 800,
        height: 600,
        alt: "HidroNortePro — Soluciones en Manejo de Agua",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
