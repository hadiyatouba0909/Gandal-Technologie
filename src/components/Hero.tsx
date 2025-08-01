import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-500"
         style={{
          backgroundImage: `linear-gradient(rgba(2, 2, 51, 0.8), rgba(5, 19, 36, 0.7)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&h=1080')`
        }}
      ></div>
      
      {/* Particules flottantes décoratives - Mobile First */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24 sm:pt-28 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-7rem)] lg:min-h-[calc(100vh-8rem)]">
          {/* Contenu principal - Mobile First */}
          <div className="text-center lg:text-left text-blue-700 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-16 text-blue-700 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Développez votre présence digitale avec 
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent block mt-2">
                Gandal-Technologie
              </span>
            </h1>     
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in justify-center lg:justify-start">
              <a
                href="#services"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span>Voir nos services</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="#contact"
                className="group bg-green-500 border-2 border-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <span>Nous contacter</span>
                <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Image - Mobile First */}
          <div className="flex justify-center order-1 lg:order-2 lg:justify-end">
            <div className="relative group">
              {/* Éléments décoratifs flottants - 6 CERCLES ÉNORMES ET ULTRA SÉPARÉS */}
              {/* Cercle 1 - Coin supérieur droit */}
              <div className="absolute -top-8 -right-8 sm:-top-16 sm:-right-16 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-bounce"></div>
              
              {/* Cercle 2 - Coin inférieur gauche (ultra éloigné) */}
              <div className="absolute -bottom-12 -left-12 sm:-bottom-20 sm:-left-20 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
              
              {/* Cercle 3 - Milieu droit (ultra éloigné) */}
              <div className="absolute top-1/2 -right-32 sm:-right-48 lg:-right-64 xl:-right-80 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
              
              {/* Cercle 4 - Coin supérieur gauche (ultra éloigné) */}
              <div className="absolute -top-24 -left-32 sm:-top-40 sm:-left-48 lg:-top-48 lg:-left-64 xl:-left-80 w-34 h-34 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-68 xl:h-68 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-25 animate-bounce" style={{animationDelay: '3s'}}></div>
              
              {/* Cercle 5 - Bas milieu gauche (ultra éloigné) */}
              <div className="absolute bottom-32 -left-48 sm:bottom-28 sm:-left-64 lg:bottom-24 lg:-left-80 xl:-left-96 w-30 h-30 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full opacity-25 animate-bounce" style={{animationDelay: '4s'}}></div>
              
              {/* Cercle 6 - Haut milieu gauche (ultra éloigné) */}
              <div className="absolute top-20 -left-40 sm:top-16 sm:-left-56 lg:top-12 lg:-left-72 xl:-left-88 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full opacity-25 animate-bounce" style={{animationDelay: '5s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour les animations personnalisées */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
          
          .animate-bounce {
            animation: bounce 3s ease-in-out infinite;
          }
        `
      }} />
    </section>
  );
};

export default Hero;