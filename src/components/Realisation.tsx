import { useState, useEffect } from 'react';
import { ExternalLink, Globe, Monitor, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';

const Realisation = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('Tous');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      type: 'Application Web',
      description: 'Plateforme e-commerce complète avec gestion des stocks, paiements en ligne et tableau de bord administrateur.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      icon: Monitor,
      featured: true,
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      name: 'Restaurant Mobile App',
      type: 'Application Mobile',
      description: 'Application mobile pour commande de repas avec géolocalisation, paiement intégré et suivi de livraison.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      icon: Smartphone,
      featured: false,
      tech: ['React Native', 'Firebase', 'Stripe']
    },
    {
      id: 3,
      name: 'Portfolio Architecte',
      type: 'Site Vitrine',
      description: 'Site vitrine élégant pour un cabinet d\'architecture avec galerie interactive et formulaire de contact.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      icon: Globe,
      featured: true,
      tech: ['Next.js', 'Tailwind', 'Framer Motion']
    },
    {
      id: 4,
      name: 'Portfolio Créatif Designer',
      type: 'Portfolio',
      description: 'Portfolio interactif pour un designer graphique avec galerie de projets, animations fluides et expérience immersive.',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      icon: Globe,
      featured: true,
      tech: ['React', 'Three.js', 'GSAP']
    },
    {
      id: 5,
      name: 'Portfolio Photographe',
      type: 'Portfolio',
      description: 'Site portfolio pour photographe professionnel avec galerie haute définition, système de booking et blog intégré.',
      image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      icon: Globe,
      featured: false,
      tech: ['Vue.js', 'Nuxt.js', 'Strapi']
    },
    {
      id: 6,
      name: 'Dashboard Analytics',
      type: 'Application Web',
      description: 'Tableau de bord analytique en temps réel avec visualisations de données et rapports personnalisés.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      icon: Monitor,
      featured: false,
      tech: ['Vue.js', 'D3.js', 'Express']
    }
  ];

  const filterOptions = ['Tous', 'Site Vitrine', 'Application Web', 'Application Mobile', 'Portfolio'];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Site Vitrine':
        return {
          bg: 'from-green-400 to-emerald-500',
          text: 'text-white',
          badge: 'bg-green-100 text-green-800'
        };
      case 'Application Web':
        return {
          bg: 'from-blue-400 to-cyan-500',
          text: 'text-white',
          badge: 'bg-blue-100 text-blue-800'
        };
      case 'Application Mobile':
        return {
          bg: 'from-purple-400 to-pink-500',
          text: 'text-white',
          badge: 'bg-purple-100 text-purple-800'
        };
      case 'Portfolio':
        return {
          bg: 'from-orange-400 to-red-500',
          text: 'text-white',
          badge: 'bg-orange-100 text-orange-800'
        };
      default:
        return {
          bg: 'from-gray-400 to-gray-500',
          text: 'text-white',
          badge: 'bg-gray-100 text-gray-800'
        };
    }
  };

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(project => project.type === filter);

  const totalSlides = Math.ceil(filteredProjects.length / itemsPerSlide);
  const maxSlide = totalSlides - 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextIndex = prev + 1;
      return nextIndex > maxSlide ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevIndex = prev - 1;
      return prevIndex < 0 ? maxSlide : prevIndex;
    });
  };

  const goToSlide = (slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex <= maxSlide) {
      setCurrentSlide(slideIndex);
    }
  };

  // Responsive items per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset slide when filter changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [filter]);

  // Update slide position when itemsPerSlide changes
  useEffect(() => {
    const newTotalSlides = Math.ceil(filteredProjects.length / itemsPerSlide);
    if (currentSlide >= newTotalSlides) {
      setCurrentSlide(Math.max(0, newTotalSlides - 1));
    }
  }, [itemsPerSlide, filteredProjects.length, currentSlide]);

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
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Particules flottantes décoratives - Responsive */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(window.innerWidth < 768 ? 6 : 12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header avec animation - Mobile First */}
          <div 
            id="portfolio-header"
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 transform ${
              isVisible['portfolio-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                Nos Réalisations
              </span>
            </h2>
            <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full animate-pulse"></div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
              Découvrez quelques-uns de nos projets récents qui illustrent notre expertise et notre passion pour l'innovation digitale.
            </p>
          </div>

          {/* Filtres avec animation - Mobile First */}
          <div 
            id="portfolio-filters"
            className={`flex justify-center mb-8 sm:mb-12 px-4 transition-all duration-1000 delay-300 transform ${
              isVisible['portfolio-filters'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl p-1 sm:p-2 shadow-lg border border-white/30 w-full max-w-4xl overflow-x-auto">
              <div className="flex space-x-1 sm:space-x-2 min-w-max px-2 sm:px-0">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base whitespace-nowrap ${
                      filter === option
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-white/50'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Slider des projets - Mobile First */}
          <div 
            id="portfolio-slider"
            className={`transition-all duration-1000 transform ${
              isVisible['portfolio-slider'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/30 backdrop-blur-sm border border-white/20 p-3 sm:p-4 lg:p-6 shadow-xl">
              {/* Header avec compteur - Mobile First */}
              <div className="flex justify-center items-center mb-4 sm:mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-slate-600">
                    {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Conteneur du slider avec navigation */}
              <div className="relative">
                {/* Navigation gauche - Cachée sur très petit écran */}
                {totalSlides > 1 && (
                  <button 
                    onClick={prevSlide}
                    className="absolute left-1 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-slate-700 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                )}

                {/* Navigation droite - Cachée sur très petit écran */}
                {totalSlides > 1 && (
                  <button 
                    onClick={nextSlide}
                    className="absolute right-1 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-slate-700 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                )}

                {/* Slider content */}
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ 
                      transform: `translateX(-${(currentSlide * 100) / totalSlides}%)`,
                      width: `${100 * Math.ceil(filteredProjects.length / itemsPerSlide)}%`
                    }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div 
                        key={slideIndex}
                        className="flex-shrink-0"
                        style={{ width: `${100 / totalSlides}%` }}
                      >
                        <div className={`grid gap-4 sm:gap-6 px-6 sm:px-8 lg:px-12 ${
                          itemsPerSlide === 1 ? 'grid-cols-1' :
                          itemsPerSlide === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                          'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        }`}>
                          {filteredProjects
                            .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                            .map((project, index) => {
                              const typeColors = getTypeColor(project.type);
                              return (
                                <div 
                                  key={project.id}
                                  className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-white/30 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-500 ${
                                    hoveredProject === project.id ? 'scale-105' : ''
                                  }`}
                                  style={{ 
                                    transitionDelay: `${index * 150}ms`
                                  }}
                                  onMouseEnter={() => setHoveredProject(project.id)}
                                  onMouseLeave={() => setHoveredProject(null)}
                                >


                                  {/* Image avec overlay - Mobile responsive */}
                                  <div className="relative overflow-hidden h-40 sm:h-48">
                                    <img 
                                      src={project.image} 
                                      alt={project.name}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${typeColors.bg} opacity-0 group-hover:opacity-80 transition-all duration-500`}></div>
                                    
                                    {/* Bouton d'action - Mobile responsive */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                      <a 
                                        href={project.liveUrl}
                                        className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                                        title="Voir le projet"
                                      >
                                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
                                      </a>
                                    </div>

                                    {/* Technologies utilisées - Mobile responsive */}
                                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                      <div className="flex flex-wrap gap-1">
                                        {project.tech.slice(0, 3).map((tech, idx) => (
                                          <span key={idx} className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-slate-700">
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Contenu - Mobile responsive */}
                                  <div className="p-4 sm:p-6">
                                    <div className="flex items-start justify-between mb-3">
                                      <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                                        <div className={`bg-gradient-to-r ${typeColors.bg} w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0`}>
                                          <project.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                        </div>
                                        <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 truncate">
                                          {project.name}
                                        </h3>
                                      </div>
                                    </div>
                                    
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 ${typeColors.badge} group-hover:scale-105 transition-transform duration-300`}>
                                      {project.type}
                                    </span>
                                    
                                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-sm sm:text-base line-clamp-3">
                                      {project.description}
                                    </p>

                                    {/* Ligne décorative */}
                                    <div className={`w-0 h-1 bg-gradient-to-r ${typeColors.bg} mt-3 sm:mt-4 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Indicateurs de pagination - Mobile responsive */}
              {totalSlides > 1 && (
                <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-6 sm:w-8' 
                          : 'bg-white/50 w-2 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour les animations personnalisées */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(2deg);
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
          
          .animate-shimmer::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shimmer 2s infinite;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `
      }} />
    </section>
  );
};

export default Realisation;