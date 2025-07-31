import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
<<<<<<< HEAD
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-500"
         style={{
          backgroundImage: `linear-gradient(rgba(2, 2, 51, 0.8), rgba(5, 19, 36, 0.7)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&h=1080')`
        }}
      ></div>
      
      {/* Particules flottantes décoratives - Mobile First */}
=======
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 transition-all duration-500 "
        style={{
          backgroundImage: `linear-gradient(rgba(2, 2, 51, 0.8), rgba(5, 19, 36, 0.7)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&h=1080')`
        }}
      ></div>
      {/* Particules flottantes décoratives */}
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
<<<<<<< HEAD
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-30 animate-pulse"
=======
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-30 animate-pulse"
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

<<<<<<< HEAD
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
=======
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Contenu à gauche */}
          <div className="text-left text-blue-700">
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-16 text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in ">
              Développez votre présence digitale avec 
              <span className="bg-gradient-to-r from-pink-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">Gandal-Technologie</span>
            </h1>     
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
              <a
                href="#services"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span>Voir nos services</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
              </a>
              
              <a
                href="#contact"
<<<<<<< HEAD
                className="group bg-green-500 border-2 border-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <span>Nous contacter</span>
                <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
=======
                className="group bg-green-500 border-2 border-white px-8 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-slate-800 transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <span>Nous contacter</span>
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
              </a>
            </div>
          </div>

<<<<<<< HEAD
          {/* Image - Mobile First */}
          <div className="flex justify-center order-1 lg:order-2 lg:justify-end">
            <div className="relative group">
              {/* Container de l'image avec effets */}
              <div className="relative overflow-hidden rounded-full transition-all duration-500">
                <img 
                  src="/WhatsApp Image 2025-05-22 at 21.55.00.jpeg"
                  alt="Équipe Gandal-Technologie au travail"
                  className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
=======
          {/* Image à droite */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Container de l'image avec effets */}
              <div className="relative overflow-hidden rounded-full transition-all duration-500 ">
                <img 
                  src="/WhatsApp Image 2025-05-22 at 21.55.00.jpeg"
                  alt="Équipe Gandal-Technologie au travail"
                  className="w-full h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
                />
                
                {/* Overlay avec effet hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

<<<<<<< HEAD
              {/* Éléments décoratifs flottants - Mobile First */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-8 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
=======
              {/* Éléments décoratifs flottants */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-bounce"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
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