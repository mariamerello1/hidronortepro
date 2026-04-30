"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const PHOTOS = [
  "/images/IMG_4544.jpeg",
  "/images/IMG_4545.jpeg",
  "/images/IMG_4546.jpeg",
  "/images/IMG_4547.jpeg",
];

export default function LorentzSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % PHOTOS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-brand-gray py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
            Instaladores Certificados Lorentz
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Equipos de bombeo solar de alta eficiencia, instalados con respaldo técnico oficial.
          </p>
        </div>
      </div>

      <div className="relative w-full h-[450px] sm:h-[550px]">
        {PHOTOS.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt={`Instalación Lorentz ${i + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? "bg-brand-blue" : "bg-brand-blue/25"
            }`}
            aria-label={`Ir a foto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
