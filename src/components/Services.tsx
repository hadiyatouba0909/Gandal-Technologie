import { useState, useEffect } from 'react';
import { Globe, Monitor, Smartphone, ArrowRight, CheckCircle, Zap, Shield, Users } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: 'Création de sites web sur mesure',
      description: 'Sites vitrines, blogs professionnels, portfolios — nous créons des interfaces élégantes, responsives et optimisées pour le web.',
      features: ['Design responsive', 'Optimisation SEO', 'Performance élevée', 'Interface intuitive'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Monitor,
      title: 'Développement d\'applications web',
      description: 'Applications de gestion, plateformes collaboratives, tableaux de bord — nous développons des solutions puissantes et sécurisées côté web.',
      features: ['Solutions sur mesure', 'Sécurité renforcée', 'Scalabilité', 'Intégrations API'],
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: Smartphone,
      title: 'Développement d\'applications mobiles',
      description: 'Pour Android et iOS, nous créons des apps fluides et intuitives, pensées pour l\'expérience utilisateur.',
      features: ['Cross-platform', 'UX optimisée', 'Performance native', 'App Store ready'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Globe,
      title: 'Solutions e-commerce',
      description: 'Boutiques en ligne, systèmes de paiement sécurisés, gestion des stocks — nous vous aidons à vendre efficacement sur le web.',
      features: ['Intégration de paiement', 'Gestion des produits', 'Suivi des commandes', 'Support client intégré'],
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50'
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: 'Réactifs',
      description: 'vos idées prennent vie rapidement',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Users,
      title: 'Flexibles',
      description: 'nous nous adaptons à vos besoins et à votre budget',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Engagés',
      description: 'votre satisfaction est notre priorité',
      color: 'from-green-400 to-cyan-500'
    },
    {
      icon: CheckCircle,
      title: 'Locaux et connectés',
      description: 'nous comprenons vos réalités et apportons des solutions globales',
      color: 'from-pink-400 to-red-500'
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Particules flottantes décoratives */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header avec animation */}
          <div 
            id="services-header"
            className={`text-center mb-20 transition-all duration-1000 transform ${
              isVisible['services-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">  Nos Services</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Chez Gandal-Technologie, nous vous accompagnons dans la conception et le développement de solutions digitales modernes, performantes et adaptées à vos besoins.
            </p>
          </div>

          {/* Grille des services avec animations staggered */}
          <div 
            id="services-grid"
            className={`grid lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 transform ${
              isVisible['services-grid'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/30 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 overflow-hidden ${
                  hoveredService === index ? 'scale-105' : ''
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`
                }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Gradient de fond animé */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                
                {/* Contenu */}
                <div className="relative z-10">
                  {/* Icône avec animation 3D */}
                  <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <service.icon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Titre avec effet de couleur */}
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 mb-4 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-sm">
                    {service.description}
                  </p>
                  
                  {/* Liste des fonctionnalités avec animations */}
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-center space-x-3 text-slate-700 group-hover:text-slate-800 transition-colors duration-300 text-sm"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full group-hover:scale-125 transition-transform duration-300 shadow-sm`}></div>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Ligne décorative */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Section avantages avec glassmorphism */}
          <div 
            id="advantages-section"
            className={`transition-all duration-1000 transform ${
              isVisible['advantages-section'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Effet de gradient animé en arrière-plan */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold text-slate-800 mb-6">
                    Pourquoi choisir <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gandal-Technologie</span> ?
                  </h3>
                  <p className="text-2xl text-slate-600 mb-8">Parce que nous sommes :</p>
                </div>
                
                {/* Grille des avantages */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
                  {advantages.map((advantage, index) => (
                    <div 
                      key={index} 
                      className="group bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:bg-white/60 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`bg-gradient-to-r ${advantage.color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0`}>
                          <advantage.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                            {advantage.title}
                          </h4>
                          <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Call to action avec animation */}
                <div className="text-center">
                  <a 
                    href="#contact" 
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105 transform"
                  >
                    <span>Démarrer votre projet</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
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
              transform: translateY(-15px);
            }
          }
          
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
          
          .group:hover .animate-shimmer {
            animation-play-state: running;
          }
        `
      }} />
    </section>
  );
};

export default Services;