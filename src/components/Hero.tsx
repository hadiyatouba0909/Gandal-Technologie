import { Button } from "./ui/button";
import { ArrowRight, Eye } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(3, 3, 94, 0.8), rgba(2, 62, 138, 0.7)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&h=1080')`
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Développez votre présence digitale avec{" "}
            <span className="text-gandal-cyan-light">Gandal-Technologie</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-body leading-relaxed">
            Nous créons des sites web, applications web et mobiles sur mesure pour faire briller vos idées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gandal-cyan hover:bg-gandal-cyan-light text-white font-semibold px-8 py-4"
              onClick={() => scrollToSection('services')}
            >
              <Eye className="h-5 w-5 mr-2" />
              Voir nos services
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4"
              onClick={() => scrollToSection('contact')}
            >
              Nous contacter
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;