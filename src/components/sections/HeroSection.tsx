"use client";

import { MessageCircle } from "lucide-react";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;

  return (
    <section
      id="inicio"
      className="relative bg-brand-gray min-h-[calc(100vh-3.5rem)] flex items-start md:items-center overflow-hidden"
    >
      {/* Mobile: imagen de fondo */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/images/mobile.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Mobile: overlay superior suave para legibilidad */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none" />

      {/* Desktop: imagen de fondo */}
      <div className="hidden md:block absolute inset-0">
        <Image
          src="/images/heroweb.png"
          alt=""
          fill
          className="object-cover object-right"
          priority
        />
      </div>

      {/* Contenido */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20 md:py-20 w-full text-center md:text-left">
        <div className="md:max-w-[52%]">

          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-4 md:mb-8">
            <Image
              src="/images/logo-hidronorte.jpg"
              alt={COMPANY.name}
              width={360}
              height={120}
              className="w-[200px] sm:w-[320px] h-auto object-contain mix-blend-multiply"
              priority
            />
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 text-white md:text-brand-blue">
            Soluciones Profesionales{" "}
            <span className="text-blue-200 md:text-brand-light sm:block">en manejo de agua</span>
          </h1>
          <p className="text-white/90 md:text-gray-600 text-sm sm:text-base max-w-xl mb-4 md:mb-10 text-center md:text-left mx-auto md:mx-0">
            Riego automatizado, bombeo solar, montaje de cañerías PEAD y mantenimiento general.
          </p>
          <div className="flex flex-row gap-3 justify-center md:justify-start items-center md:items-start">
            <a
              href="https://www.instagram.com/hidronortepro?igsh=cmpxZGl0ejV0OW02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-light text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base md:text-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-brand-light text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-base md:text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
