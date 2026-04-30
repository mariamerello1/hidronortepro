import { TrendingUp, Gauge, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { WHY_US } from "@/lib/constants";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  eficiencia: TrendingUp,
  perdidas: Gauge,
  materiales: ShieldCheck,
  medida: SlidersHorizontal,
};

export default function PorQueSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Años de experiencia en el campo nos respaldan. Estos son los pilares
            de nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {WHY_US.map((item) => {
            const Icon = ICONS[item.id];
            return (
              <div key={item.id} className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0 mt-1">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
