import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Lightbulb, Handshake } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const teamImages = [
  'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
  'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
];

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const header = useInView();
  const content = useInView();
  const mission = useInView();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white">
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
                À Propos de Nous
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Gandal-Technologie est une jeune entreprise de développement web et mobile,
              fondée par deux passionnés du numérique.
            </p>
          </div>

          {/* Main content */}
          <div
            ref={content.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20 reveal ${
              content.isVisible ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            {/* Slider */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {teamImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Équipe ${i + 1}`}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover flex-shrink-0"
                    loading="lazy"
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentSlide((p) => (p - 1 + teamImages.length) % teamImages.length)
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((p) => (p + 1) % teamImages.length)}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {teamImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === currentSlide ? 'bg-white w-6' : 'bg-white/50 w-2'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Text */}
            <div className="space-y-5">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Gandal-Technologie, c'est l'histoire de deux passionnés du numérique, une
                développeuse et un développeur qui ont décidé de mettre leur énergie, leur
                complémentarité et leur vision commune au service de la transformation digitale
                en Afrique et au-delà.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Nés d'un désir de créer, d'innover et de servir, nous sommes une jeune équipe
                dynamique, créative et ambitieuse, spécialisée dans le développement web et
                mobile full stack.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Chaque projet que nous acceptons est une aventure que nous vivons à fond : avec
                rigueur, écoute, curiosité, et un engagement total pour la qualité.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div
            ref={mission.ref}
            className={`reveal ${mission.isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
          >
            <div className="bg-slate-50 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 text-center">
                Notre Mission
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6 rounded-full" />
              <blockquote className="text-lg sm:text-xl text-slate-600 text-center italic mb-8 leading-relaxed">
                "Nous ne nous contentons pas de faire du code : nous bâtissons des solutions
                technologiques sur mesure, pensées pour l'humain, orientées vers l'impact, et
                taillées pour durer."
              </blockquote>

              <div className="bg-gradient-to-r from-primary-700 to-primary-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
                <h4 className="text-xl sm:text-2xl font-semibold mb-3 text-center">
                  Notre nom "Gandal"
                </h4>
                <p className="mb-5 text-center text-primary-100 text-base sm:text-lg">
                  Qui signifie "savoir" en peulh, est un hommage à nos racines et à notre
                  mission :
                </p>
                <div className="space-y-3 max-w-lg mx-auto">
                  <p className="flex items-center gap-3 text-sm sm:text-base">
                    <Users className="w-5 h-5 text-primary-200 flex-shrink-0" />
                    Mettre la connaissance au service du développement local.
                  </p>
                  <p className="flex items-center gap-3 text-sm sm:text-base">
                    <Lightbulb className="w-5 h-5 text-primary-200 flex-shrink-0" />
                    Valoriser le talent africain avec des outils modernes.
                  </p>
                  <p className="flex items-center gap-3 text-sm sm:text-base">
                    <Handshake className="w-5 h-5 text-primary-200 flex-shrink-0" />
                    Bâtir des ponts entre les idées et leur réalisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
