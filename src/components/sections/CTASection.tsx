import { COMPANY } from "@/lib/constants";

export default function CTASection() {
  return (
    <section id="contacto" className="bg-brand-blue py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
          ¿Listo para mejorar tu sistema de agua?
        </h2>
        <p className="text-blue-200 text-lg leading-relaxed">
          Contáctanos sin costo ni compromiso. Analizamos tu situación y te
          proponemos la solución más eficiente para tu proyecto.
        </p>
      </div>
    </section>
  );
}
