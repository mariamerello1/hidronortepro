import { Home, Leaf, HardHat, Building2 } from "lucide-react";
import { ZONES } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  hogares: Home,
  rurales: Leaf,
  mineria: HardHat,
  productivos: Building2,
};

export default function ZonasSection() {
  return (
    <section id="nosotros" className="bg-brand-gray py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
            ¿Dónde trabajamos?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Brindamos nuestros servicios en una amplia variedad de entornos,
            adaptándonos a cada necesidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ZONES.map((zone) => {
            const Icon = ICONS[zone.id];
            return (
              <div
                key={zone.id}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-brand-blue mb-2">
                  {zone.label}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {zone.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
