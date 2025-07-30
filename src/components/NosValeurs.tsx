import { useState, useEffect } from 'react';
import { Target, Users, Lightbulb, Shield, Handshake } from 'lucide-react';

const NosValeurs = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  const values = [
    {
      icon: Target,
      title: 'Simplicité',
      description: 'Des interfaces accessibles, des fonctionnalités claires, des expériences fluides.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Handshake,
      title: 'Confiance',
      description: 'Nous bâtissons des relations solides, honnêtes et transparentes avec nos clients.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'En veille permanente, nous utilisons les technologies les plus récentes.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Deux cerveaux, deux sensibilités, un objectif commun : faire réussir votre projet.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Responsabilité',
      description: 'Chaque ligne de code, chaque livraison est faite avec sérieux et engagement.',
      color: 'from-red-500 to-rose-500'
    },
	{
	  icon: Target,
	  title: 'Excellence',
	  description: 'Nous visons toujours plus haut, pour vous offrir le meilleur de la technologie.',
	  color: 'from-indigo-500 to-violet-500'
	}
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header avec animation */}
          <div 
            id="values-header"
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible['values-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nos Valeurs</span> 
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Les principes qui guident chacune de nos actions et définissent notre approche du développement technologique
            </p>
          </div>

          {/* Grille des valeurs avec animations staggered */}
          <div 
            id="values-grid"
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 transform ${
              isVisible['values-grid'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {values.map((value, index) => (
              <div 
                key={index}
                id={`value-${index}`}
                className={`group bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:bg-white/80 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 text-center transform ${
                  isVisible[`value-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Icône avec effet de rotation et d'échelle */}
                <div className={`bg-gradient-to-r ${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <value.icon className="w-10 h-10 text-white relative z-10" />
                </div>

                {/* Titre avec effet de couleur */}
                <h3 className="text-2xl font-semibold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description avec effet subtil */}
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {value.description}
                </p>

                {/* Ligne décorative qui apparaît au hover */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 group-hover:w-16 transition-all duration-500 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Section complémentaire avec citation */}
          <div 
            id="values-quote"
            className={`mt-20 text-center transition-all duration-1000 delay-500 transform ${
              isVisible['values-quote'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-light text-slate-700 italic mb-6 leading-relaxed">
                "Ces valeurs ne sont pas que des mots sur une page, elles sont l'âme de chaque projet que nous réalisons."
              </blockquote>
              <div className="flex items-center justify-center space-x-4 text-slate-600">
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span className="font-semibold">L'équipe Gandal-Technologie</span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Décoration avec particules flottantes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r ${values[i % values.length]?.color || 'from-blue-500 to-purple-500'} rounded-full opacity-20 animate-pulse`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Styles pour les animations personnalisées */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `
      }} />
    </section>
  );
};

export default NosValeurs;