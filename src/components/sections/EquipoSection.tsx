import Image from "next/image";
import { MessageCircle } from "lucide-react";

const TEAM = [
  {
    name: "Santiago Merello",
    role: "Geólogo",
    photo: "/images/foto-santiago.jpg",
    phone: "5493875265594",
    phoneDisplay: "+54 9 387 526-5594",
  },
  {
    name: "José Leoni",
    role: "Ingeniero",
    photo: "/images/foto-jose.jpg",
    phone: "5493875259286",
    phoneDisplay: "+54 9 387 525-9286",
  },
];

const EMAIL = "hidronortepro@gmail.com";

export default function EquipoSection() {
  return (
    <section className="bg-brand-gray py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-blue">
            Equipo HidroNortePro
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-10">
          {TEAM.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-5 ring-4 ring-brand-light/30">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-1">
                {member.name}
              </h3>
              <p className="text-brand-light font-medium mb-2">{member.role}</p>
              <a
                href={`https://wa.me/${member.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand-green transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand-green shrink-0" />
                {member.phoneDisplay}
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={`mailto:${EMAIL}`}
            className="text-gray-500 hover:text-brand-blue transition-colors text-sm"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
