import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HidroNortePro | Riego, Bombeo Solar y Cañerías PEAD en Salta",
  description:
    "Empresa especializada en sistemas de riego automatizado, bombeo solar sumergible, montaje de cañerías PEAD y mantenimiento general en Salta, Argentina. Soluciones hídricas profesionales para hogares, zonas rurales y minería.",
  keywords:
    "riego automatizado Salta, bombeo solar Salta, cañerías PEAD Salta, sistemas de agua Salta, riego por goteo Salta, bombeo sumergible Salta, HidroNortePro",
  metadataBase: new URL("https://hidronortepro.com"),
  alternates: {
    canonical: "https://hidronortepro.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "HidroNortePro | Riego, Bombeo Solar y Cañerías PEAD en Salta",
    description:
      "Empresa especializada en sistemas de riego automatizado, bombeo solar sumergible, montaje de cañerías PEAD y mantenimiento general en Salta, Argentina.",
    url: "https://hidronortepro.com",
    siteName: "HidroNortePro",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/logo-hidronorte.jpg",
        width: 800,
        height: 600,
        alt: "HidroNortePro — Soluciones en Manejo de Agua en Salta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HidroNortePro | Riego, Bombeo Solar y Cañerías PEAD en Salta",
    description:
      "Sistemas de riego automatizado, bombeo solar sumergible, montaje de cañerías PEAD y mantenimiento en Salta, Argentina.",
    images: ["/images/logo-hidronorte.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HidroNortePro",
  description:
    "Empresa especializada en sistemas de riego automatizado, bombeo solar sumergible, montaje de cañerías PEAD y mantenimiento general en Salta, Argentina.",
  url: "https://hidronortepro.com",
  telephone: "+5493875259286",
  email: "hidronortepro@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Salta",
    addressRegion: "Salta",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -24.7821,
    longitude: -65.4232,
  },
  areaServed: {
    "@type": "State",
    name: "Salta",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios HidroNortePro",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Riego Automatizado" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bombeo Solar Sumergible" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montaje de Cañerías PEAD" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mantenimiento General" } },
    ],
  },
  sameAs: ["https://www.instagram.com/hidronortepro"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.className} h-full`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
