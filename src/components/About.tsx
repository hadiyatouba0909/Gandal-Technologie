import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Lightbulb, Handshake } from 'lucide-react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  const teamImages = [
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
  ];

  // Effet pour le slider d'images
  useEffect(( ) => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [teamImages.length]);

  // Effet pour les animations au défilement (Intersection Observer)
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

    // Assurez-vous que les IDs sont uniques pour éviter les conflits
    const elements = document.querySelectorAll('[id^="about-"]');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamImages.length) % teamImages.length);
  };

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header avec animation - Mobile First */}
          <div
            id="about-header"
            className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 transform ${
              isVisible['about-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">À Propos de Nous</span>
            </h2>
            <div className="w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Gandal-Technologie est une jeune entreprise de développement web et mobile, fondée par deux passionnés du numérique.
            </p>
          </div>

          {/* Section principale avec slider - Mobile First */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            {/* Slider d'images - Mobile First */}
            <div
              id="about-slider"
              className={`relative transition-all duration-1000 transform order-1 lg:order-1 ${
                isVisible['about-slider'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl group">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {teamImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Équipe de développement ${index + 1}`}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover flex-shrink-0"
                    />
                  ))}
                </div>
                <button 
                  onClick={prevSlide} 
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                </button>
                <button 
                  onClick={nextSlide} 
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                >
                  <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                </button>
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                  {teamImages.map((_, index) => (
                    <button 
                      key={index} 
                      onClick={() => setCurrentSlide(index)} 
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white w-4 sm:w-6' : 'bg-white/50'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Contenu textuel - Mobile First */}
            <div
              id="about-content"
              className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-300 transform order-2 lg:order-2 ${
                isVisible['about-content'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Gandal-Technologie, c'est l'histoire de deux passionnés du numérique, une développeuse et un développeur qui ont décidé de mettre leur énergie, leur complémentarité et leur vision commune au service de la transformation digitale en Afrique et au-delà.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Nés d'un désir de créer, d'innover et de servir, nous sommes une jeune équipe dynamique, créative et ambitieuse, spécialisée dans le développement web et mobile full stack.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Chaque projet que nous acceptons est une aventure que nous vivons à fond : avec rigueur, écoute, curiosité, et un engagement total pour la qualité.
              </p>
            </div>
          </div>

          {/* Section Mission avec effet glassmorphism - Mobile First */}
          <div
            id="about-mission"
            className={`mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-500 transform ${
              isVisible['about-mission'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-white/40 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4 text-center">Notre Mission</h3>
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-light text-slate-700 text-center italic mb-6 sm:mb-8 leading-relaxed px-2">
                "Nous ne nous contentons pas de faire du code : nous bâtissons des solutions technologiques sur mesure, pensées pour l'humain, orientées vers l'impact, et taillées pour durer."
              </blockquote>
              
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-black/10 opacity-50"></div>
                <div className="relative z-10 text-center">
                  <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Notre nom "Gandal"</h4>
                  <p className="mb-4 sm:mb-6 text-base sm:text-lg font-light">Qui signifie "savoir" en peulh, est un hommage à nos racines et à notre mission :</p>
                  <div className="space-y-2 sm:space-y-3 text-left inline-block">
                    <p className="flex items-center text-sm sm:text-base">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-cyan-300 flex-shrink-0"/> 
                      Mettre la connaissance au service du développement local.
                    </p>
                    <p className="flex items-center text-sm sm:text-base">
                      <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-cyan-300 flex-shrink-0"/> 
                      Valoriser le talent africain avec des outils modernes.
                    </p>
                    <p className="flex items-center text-sm sm:text-base">
                      <Handshake className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-cyan-300 flex-shrink-0"/> 
                      Bâtir des ponts entre les idées et leur réalisation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Décoration avec particules flottantes - Mobile First */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Styles pour les animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `
      }} />
    </section>
  );
};

export default About;
