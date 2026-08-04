import {
  Globe,
  Monitor,
  Smartphone,
  Server,
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
  {
    icon: Server,
    title: 'Hébergement applicatif VPS',
    description:
      'Hébergement professionnel, sécurisé et performant pour vos applications web, bases de données et services en ligne.',
    features: [
      'Infrastructure performante',
      'Disponibilité 24/7',
      'Administration facilitée',
      'Sécurité renforcée',
    ],
    gradient: 'from-slate-700 to-slate-900',
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

          {/* VPS offers */}
          <div className="mb-16 lg:mb-20">
            <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">GANDAL-TECHNOLOGIE</h3>
                <p className="text-primary-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
                  L’hébergement applicatif professionnel, sécurisé et performant.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl font-semibold mb-4">💻 Vos applications sur nos VPS</h4>
                  <ul className="space-y-3 text-primary-50 text-sm sm:text-base">
                    <li className="flex gap-2"><span>•</span><span>Performance optimisée pour vos applications</span></li>
                    <li className="flex gap-2"><span>•</span><span>Infrastructure professionnelle, rapide et performante</span></li>
                    <li className="flex gap-2"><span>•</span><span>Disponibilité et sécurité 24/7</span></li>
                    <li className="flex gap-2"><span>•</span><span>Administration facilitée pour un déploiement rapide</span></li>
                  </ul>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h4 className="text-xl font-semibold mb-4">💳 Nos forfaits d’hébergement</h4>
                  <div className="space-y-4 text-sm sm:text-base">
                    <div className="rounded-xl bg-white/15 p-4">
                      <p className="font-semibold">Formule mensuelle</p>
                      <p className="text-primary-100">3 000 F CFA / mois</p>
                    </div>
                    <div className="rounded-xl bg-white/15 p-4 border border-primary-300/40">
                      <p className="font-semibold">Formule semestrielle <span className="text-amber-300">(Recommandée)</span></p>
                      <p className="text-primary-100">15 000 F CFA / 6 mois</p>
                      <p className="text-amber-300 text-sm mt-1">Économisez l’équivalent d’un mois offert !</p>
                    </div>
                    <div className="rounded-xl bg-white/15 p-4">
                      <p className="font-semibold">Formule annuelle</p>
                      <p className="text-primary-100">25 000 F CFA / an</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
