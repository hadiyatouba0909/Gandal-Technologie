import { Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const teamMembers = [
  {
    name: 'Hadiyatou BA',
    role: 'Développeuse FullStack',
    image: '/WhatsApp Image 2025-03-03 at 08.51.12.jpeg',
    gradient: 'from-pink-500 to-purple-500',
    badge: 'Co-fondatrice',
    socials: {
      github: 'https://github.com/hadiyatouba0909',
      linkedin: 'https://www.linkedin.com/in/hadiyatou-ba-a5742a247/',
      email: 'hadiyatoubab09@gmail.com',
    },
  },
  {
    name: 'Ibrahima Sory Diallo',
    role: 'Développeur FullStack & Lead Dev',
    image: '/WhatsApp Image 2025-05-22 at 21.55.00.jpeg',
    gradient: 'from-primary-500 to-primary-400',
    badge: 'Co-fondateur',
    socials: {
      github: 'https://github.com/IbrahimaISIDev',
      linkedin: 'https://www.linkedin.com/in/ibrahima-sory-diallo-363069249/',
      email: 'soydiallo371@gmail.com',
    },
  },
];

const Team = () => {
  const header = useInView();
  const cards = useInView(0.05);

  return (
    <section id="team" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div
            ref={header.ref}
            className={`text-center mb-12 lg:mb-16 reveal ${header.isVisible ? 'reveal-visible' : 'reveal-hidden'
              }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                Notre Équipe
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Derrière chaque ligne de code, il y a des personnes passionnées, engagées et
              complémentaires.
            </p>
          </div>

          {/* Members */}
          <div
            ref={cards.ref}
            className={`grid md:grid-cols-2 gap-6 sm:gap-8 reveal ${cards.isVisible ? 'reveal-visible' : 'reveal-hidden'
              }`}
          >
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="group bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 hover:shadow-xl transition-all duration-300"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Photo + Badge */}
                <div className="relative mb-8 flex justify-center">
                  <div className="relative">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r ${member.gradient} text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md whitespace-nowrap`}
                    >
                      {member.badge}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">{member.role}</p>
                </div>

                {/* Social */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800 text-white p-2.5 rounded-full hover:bg-slate-700 hover:-translate-y-0.5 transition-all"
                    aria-label={`GitHub de ${member.name}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${member.socials.email}`}
                    className={`bg-gradient-to-r ${member.gradient} text-white p-2.5 rounded-full hover:-translate-y-0.5 transition-all`}
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
