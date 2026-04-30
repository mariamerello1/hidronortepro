import { Droplets, MessageCircle, Mail } from "lucide-react";
import { COMPANY, SERVICES, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Empresa */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Droplets className="w-6 h-6 text-brand-light" />
              <span className="font-bold text-lg">{COMPANY.name}</span>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              {COMPANY.tagline}. Expertos en sistemas hidráulicos para agricultura, industria y uso doméstico.
            </p>
          </div>

          {/* Columna 2: Servicios */}
          <div>
            <h3 className="font-semibold mb-3 text-blue-100">Servicios</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#servicios"
                    className="text-blue-200 hover:text-white text-sm transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="font-semibold mb-3 text-blue-100">Contacto</h3>
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-200 hover:text-white text-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                WhatsApp
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2 text-blue-200 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                {COMPANY.email}
              </a>
            </div>

            {/* Nav links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-blue-300 hover:text-white text-xs transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-10 pt-6 text-center text-blue-300 text-sm">
          © {year} {COMPANY.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
