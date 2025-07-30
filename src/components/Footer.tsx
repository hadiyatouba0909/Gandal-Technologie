import { MapPin, Mail, Github, Linkedin, MessageCircle, Facebook } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Accueil", id: "accueil" },
    { name: "À propos", id: "a-propos" },
    { name: "Services", id: "services" },
    { name: "Réalisations", id: "realisations" },
    { name: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "#" },
    { icon: Linkedin, name: "LinkedIn", url: "#" },
    { icon: MessageCircle, name: "WhatsApp", url: "https://wa.me/221xxxxxxxx" },
    { icon: Facebook, name: "Facebook", url: "#" }
  ];

  return (
    <footer className="bg-gandal-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et slogan */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=80&h=40" 
                alt="Gandal-Technologie" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-xl font-heading font-bold">
                Gandal-Technologie
              </span>
            </div>
            <p className="text-gandal-ice font-body leading-relaxed mb-6 max-w-md">
              "L'innovation au service de vos idées"
            </p>
            <p className="text-gandal-sky font-body text-sm leading-relaxed">
              Nous transformons vos idées en solutions digitales performantes 
              et sur mesure. Développement web et mobile full stack en Afrique et au-delà.
            </p>
          </div>

          {/* Menu rapide */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-gandal-cyan-light">
              Liens utiles
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gandal-sky hover:text-gandal-cyan-light transition-colors font-body text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact et réseaux sociaux */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4 text-gandal-cyan-light">
              Contact rapide
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-gandal-cyan flex-shrink-0" />
                <span className="text-gandal-sky font-body">gandal.technologie@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-gandal-cyan flex-shrink-0" />
                <span className="text-gandal-sky font-body">Dakar, Sénégal</span>
              </div>
            </div>
            
            <h4 className="text-sm font-heading font-semibold mb-3 text-gandal-cyan-light">
              Suivez-nous
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(social.url, '_blank')}
                  className="bg-transparent border-gandal-cyan text-gandal-cyan hover:bg-gandal-cyan hover:text-white"
                >
                  <social.icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gandal-blue mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gandal-sky font-body text-sm">
              © 2025 Gandal-Technologie. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <button className="text-gandal-sky hover:text-gandal-cyan-light transition-colors font-body">
                Mentions légales
              </button>
              <button className="text-gandal-sky hover:text-gandal-cyan-light transition-colors font-body">
                Politique de confidentialité
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;