import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&h=1080')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800/95 via-primary-700/90 to-primary-600/85" />
    </div>

    {/* Content */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 sm:pt-40 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-primary-200 text-sm font-medium mb-8">
          🚀 Développement Web & Mobile sur mesure
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
          Développez votre
          <br />
          <span className="bg-gradient-to-r from-primary-200 via-primary-100 to-white bg-clip-text text-transparent">
            présence digitale
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-primary-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Nous concevons des sites web, applications mobiles et solutions sur mesure
          pour donner vie à vos ambitions numériques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="group inline-flex items-center justify-center gap-2 bg-white text-primary-800 px-8 py-4 rounded-full font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Découvrir nos services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://wa.me/221780160474"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Discuter sur WhatsApp
          </a>
        </div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
      <a
        href="#about"
        className="flex flex-col items-center text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-xs mb-2 tracking-wider uppercase">Découvrir</span>
        <div className="w-5 h-8 border-2 border-current rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
      </a>
    </div>
  </section>
);

export default Hero;
