import {
  Globe,
  Monitor,
  Smartphone,
  ArrowRight,
  Zap,
  Shield,
  Users,
  CheckCircle,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Globe,
    title: 'Sites web sur mesure',
    description:
      'Sites vitrines, blogs professionnels, portfolios — nous créons des interfaces élégantes, responsives et optimisées pour le web.',
    features: ['Design responsive', 'Optimisation SEO', 'Performance élevée', 'Interface intuitive'],
    gradient: 'from-primary-500 to-primary-400',
  },
  {
    icon: Monitor,
    title: "Applications web",
    description:
      "Applications de gestion, plateformes collaboratives, tableaux de bord — des solutions puissantes et sécurisées.",
    features: ['Solutions sur mesure', 'Sécurité renforcée', 'Scalabilité', 'Intégrations API'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Applications mobiles',
    description:
      "Pour Android et iOS, nous créons des apps fluides et intuitives, pensées pour l'expérience utilisateur.",
    features: ['Cross-platform', 'UX optimisée', 'Performance native', 'App Store ready'],
    gradient: 'from-green-500 to-emerald-500',
  },
];

const advantages = [
  {
    icon: Zap,
    title: 'Réactifs',
    description: 'Vos idées prennent vie rapidement.',
  },
  {
    icon: Users,
    title: 'Flexibles',
    description: 'Nous nous adaptons à vos besoins et à votre budget.',
  },
  {
    icon: Shield,
    title: 'Engagés',
    description: 'Votre satisfaction est notre priorité.',
  },
  {
    icon: CheckCircle,
    title: 'Locaux et connectés',
    description: 'Nous comprenons vos réalités et apportons des solutions globales.',
  },
];

const Services = () => {
  const header = useInView();
  const grid = useInView(0.05);
  const why = useInView();

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={header.ref}
            className={`text-center mb-12 lg:mb-16 reveal ${
              header.isVisible ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                Nos Services
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Nous vous accompagnons dans la conception et le développement de solutions
              digitales modernes, performantes et adaptées à vos besoins.
            </p>
          </div>

          {/* Service cards */}
          <div
            ref={grid.ref}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 lg:mb-20 reveal ${
              grid.isVisible ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${service.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-5 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-600">
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Why choose us */}
          <div
            ref={why.ref}
            className={`reveal ${why.isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          >
            <div className="bg-slate-50 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-100">
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3">
                  Pourquoi choisir{' '}
                  <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                    Gandal-Technologie
                  </span>{' '}
                  ?
                </h3>
                <p className="text-lg text-slate-600">Parce que nous sommes :</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10">
                {advantages.map((adv, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-100"
                  >
                    <div className="bg-primary-50 p-2.5 rounded-lg flex-shrink-0">
                      <adv.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{adv.title}</h4>
                      <p className="text-sm text-slate-600">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-600/25 transition-all duration-300"
                >
                  Démarrer votre projet
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
