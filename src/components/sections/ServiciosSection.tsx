import { Droplets, Sun, Layers, Wrench } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  riego: Droplets,
  bombeo: Sun,
  canerias: Layers,
  mantenimiento: Wrench,
};

export default function ServiciosSection() {
  return (
    <section id="servicios" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Ofrecemos soluciones completas para el manejo eficiente del agua en
            cualquier tipo de proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.id];
            return (
              <div
                key={service.id}
                className="rounded-2xl border border-gray-100 p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-brand-light/10 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-brand-light" />
                </div>
                <h3 className="text-xl font-semibold text-brand-blue mb-1">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-brand-light mb-3">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
