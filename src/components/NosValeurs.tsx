import { Target, Users, Lightbulb, Shield, Handshake } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const values = [
  {
    icon: Target,
    title: 'Simplicité',
    description:
      'Des interfaces accessibles, des fonctionnalités claires, des expériences fluides.',
    color: 'from-primary-500 to-primary-400',
  },
  {
    icon: Handshake,
    title: 'Confiance',
    description:
      'Nous bâtissons des relations solides, honnêtes et transparentes avec nos clients.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'En veille permanente, nous utilisons les technologies les plus récentes.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Deux cerveaux, deux sensibilités, un objectif commun : faire réussir votre projet.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Responsabilité',
    description:
      'Chaque ligne de code, chaque livraison est faite avec sérieux et engagement.',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Target,
    title: 'Excellence',
    description:
      'Nous visons toujours plus haut, pour vous offrir le meilleur de la technologie.',
    color: 'from-indigo-500 to-violet-500',
  },
];

const NosValeurs = () => {
  const header = useInView();
  const grid = useInView(0.05);
  const quote = useInView();

  return (
    <section id="values" className="py-16 sm:py-20 lg:py-28 bg-slate-50">
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
                Nos Valeurs
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Les principes qui guident chacune de nos actions et définissent notre approche
              du développement technologique.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={grid.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal ${
              grid.isVisible ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            {values.map((value, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg border border-slate-100 hover:-translate-y-1 transition-all duration-300 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`bg-gradient-to-r ${value.color} w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            ref={quote.ref}
            className={`mt-16 text-center reveal ${
              quote.isVisible ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            <div className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-100 max-w-3xl mx-auto">
              <blockquote className="text-xl sm:text-2xl font-light text-slate-600 italic leading-relaxed">
                "Ces valeurs ne sont pas que des mots sur une page, elles sont l'âme de
                chaque projet que nous réalisons."
              </blockquote>
              <div className="flex items-center justify-center gap-3 mt-4 text-slate-500">
                <div className="w-8 h-px bg-primary-400" />
                <span className="font-medium text-sm">L'équipe Gandal-Technologie</span>
                <div className="w-8 h-px bg-primary-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosValeurs;
