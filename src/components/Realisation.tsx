import { useState, useEffect } from 'react';
import { ExternalLink, Github, Globe, Monitor, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';

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
      id: 7,
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
      id: 8,
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
      id: 4,
      name: 'Dashboard Analytics',
      type: 'Application Web',
      description: 'Tableau de bord analytique en temps réel avec visualisations de données et rapports personnalisés.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      icon: Monitor,
      featured: false,
      tech: ['Vue.js', 'D3.js', 'Express']
    },
    {
      id: 5,
      name: 'Fitness Tracker',
      type: 'Application Mobile',
      description: 'Application de suivi fitness avec programmes d\'entraînement, tracking des performances et communauté.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      icon: Smartphone,
      featured: true,
      tech: ['Flutter', 'GraphQL', 'PostgreSQL']
    },
    {
      id: 6,
      name: 'Corporate Website',
      type: 'Site Vitrine',
      description: 'Site corporate moderne avec CMS intégré, blog et système de gestion de contenu multilingue.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      liveUrl: '#',
      githubUrl: '#',
      icon: Globe,
      featured: false,
      tech: ['WordPress', 'PHP', 'MySQL']
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  // Responsive items per slide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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
        {[...Array(12)].map((_, i) => (
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header avec animation */}
          <div 
            id="portfolio-header"
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible['portfolio-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">  Nos Réalisations</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Découvrez quelques-uns de nos projets récents qui illustrent notre expertise et notre passion pour l'innovation digitale.
            </p>


          </div>

          {/* Filtres avec animation */}
          <div 
            id="portfolio-filters"
            className={`flex justify-center mb-12 transition-all duration-1000 delay-300 transform ${
              isVisible['portfolio-filters'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/30">
              <div className="flex space-x-2">
                {filterOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
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

          {/* Slider des projets avec navigation repositionnée */}
          <div 
            id="portfolio-slider"
            className={`transition-all duration-1000 transform ${
              isVisible['portfolio-slider'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative overflow-hidden rounded-3xl bg-white/30 backdrop-blur-sm border border-white/20 p-6 shadow-xl">
              {/* Header avec compteur */}
              <div className="flex justify-center items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-600">
                    {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>

              {/* Conteneur du slider avec navigation */}
              <div className="relative">
                {/* Navigation gauche */}
                {totalSlides > 1 && (
                  <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}

                {/* Navigation droite */}
                {totalSlides > 1 && (
                  <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-slate-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}

                {/* Slider content */}
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ 
                      transform: `translateX(-${currentSlide * 100}%)`,
                      width: `${totalSlides * 100}%`
                    }}
                  >
                    {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                      <div 
                        key={slideIndex}
                        className="w-full flex-shrink-0"
                        style={{ width: `${100 / totalSlides}%` }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
                          {filteredProjects
                            .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                            .map((project, index) => {
                              const typeColors = getTypeColor(project.type);
                              return (
                                <div 
                                  key={project.id}
                                  className={`group relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg border border-white/30 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 ${
                                    hoveredProject === project.id ? 'scale-105' : ''
                                  }`}
                                  style={{ 
                                    transitionDelay: `${index * 150}ms`
                                  }}
                                  onMouseEnter={() => setHoveredProject(project.id)}
                                  onMouseLeave={() => setHoveredProject(null)}
                                >
                                  {/* Badge featured */}
                                  {project.featured && (
                                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                      ⭐ Featured
                                    </div>
                                  )}

                                  {/* Image avec overlay */}
                                  <div className="relative overflow-hidden h-48">
                                    <img 
                                      src={project.image} 
                                      alt={project.name}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    
                                    {/* Gradient overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${typeColors.bg} opacity-0 group-hover:opacity-80 transition-all duration-500`}></div>
                                    
                                    {/* Boutons d'action */}
                                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                                      <a 
                                        href={project.liveUrl}
                                        className="bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                                        title="Voir le projet"
                                      >
                                        <ExternalLink className="w-5 h-5 text-slate-800" />
                                      </a>
                                      <a 
                                        href={project.githubUrl}
                                        className="bg-white/90 backdrop-blur-sm p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                                        title="Code source"
                                      >
                                        <Github className="w-5 h-5 text-slate-800" />
                                      </a>
                                    </div>

                                    {/* Technologies utilisées */}
                                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                      <div className="flex flex-wrap gap-1">
                                        {project.tech.map((tech, idx) => (
                                          <span key={idx} className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-slate-700">
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Contenu */}
                                  <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                      <div className="flex items-center space-x-3">
                                        <div className={`bg-gradient-to-r ${typeColors.bg} w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                          <project.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                                          {project.name}
                                        </h3>
                                      </div>
                                    </div>
                                    
                                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${typeColors.badge} group-hover:scale-105 transition-transform duration-300`}>
                                      {project.type}
                                    </span>
                                    
                                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 text-sm">
                                      {project.description}
                                    </p>

                                    {/* Ligne décorative */}
                                    <div className={`w-0 h-1 bg-gradient-to-r ${typeColors.bg} mt-4 group-hover:w-full transition-all duration-500 rounded-full`}></div>
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

              {/* Indicateurs de pagination */}
              {totalSlides > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-8' 
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
        `
      }} />
    </section>
  );
};

export default Realisation;