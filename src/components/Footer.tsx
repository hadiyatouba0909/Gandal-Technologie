import { useState, useEffect } from 'react';
import { Code2, Mail, MapPin, Github, Linkedin, Facebook, Instagram, MessageCircle, ArrowUp, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [showScrollTop, setShowScrollTop] = useState(false);

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Nos Valeurs', href: '#values' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      name: 'GitHub', 
      href: '#',
      gradient: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:shadow-gray-500/50'
    },
    { 
      icon: Linkedin, 
      name: 'LinkedIn', 
      href: '#',
      gradient: 'from-blue-500 to-blue-700',
      hoverColor: 'hover:shadow-blue-500/50'
    },
    { 
      icon: MessageCircle, 
      name: 'WhatsApp', 
      href: 'https://wa.me/221771234567',
      gradient: 'from-green-500 to-green-700',
      hoverColor: 'hover:shadow-green-500/50'
    },
    { 
      icon: Facebook, 
      name: 'Facebook', 
      href: '#',
      gradient: 'from-blue-400 to-blue-600',
      hoverColor: 'hover:shadow-blue-400/50'
    },
    { 
      icon: Instagram, 
      name: 'Instagram', 
      href: '#',
      gradient: 'from-pink-400 to-red-500',
      hoverColor: 'hover:shadow-pink-500/50'
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

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Particules flottantes décoratives */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient de séparation */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        {/* Section principale */}
        <div 
          id="footer-main"
          className={`grid md:grid-cols-4 gap-8 mb-12 transition-all duration-1000 transform ${
            isVisible['footer-main'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="group">
              <div className="flex items-center space-x-4 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Code2 className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Gandal-Technologie
                  </h3>
                  <p className="text-blue-200 font-medium">L'innovation au service de vos idées</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                Spécialisés dans le développement web et mobile full stack, nous transformons vos idées en solutions digitales performantes et sur mesure.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="group flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <a 
                    href="mailto:gandal.technologie@gmail.com" 
                    className="text-slate-300 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-1 transform"
                  >
                    gandal.technologie@gmail.com
                  </a>
                </div>
                
                <div className="group flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  <div className="bg-gradient-to-r from-red-400 to-pink-500 p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-300 group-hover:text-blue-300 transition-colors duration-300">
                    Dakar, Sénégal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div 
            className={`transition-all duration-1000 delay-200 transform ${
              isVisible['footer-main'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-8 h-8 rounded-xl flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-white">Liens rapides</h4>
            </div>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="group flex items-center space-x-3 text-slate-300 hover:text-blue-300 transition-all duration-300 p-2 rounded-xl hover:bg-white/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div 
            className={`transition-all duration-1000 delay-400 transform ${
              isVisible['footer-main'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 w-8 h-8 rounded-xl flex items-center justify-center">
                <Instagram className="w-4 h-4 text-white" />
              </div>
              <h4 className="text-2xl font-semibold text-white">Suivez-nous</h4>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`group bg-gradient-to-r ${social.gradient} p-4 rounded-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg ${social.hoverColor}`}
                  title={social.name}
                  target={social.name === 'WhatsApp' ? '_blank' : '_self'}
                  rel={social.name === 'WhatsApp' ? 'noopener noreferrer' : ''}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-6 h-6 text-white group-hover:animate-bounce" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          id="footer-bottom"
          className={`border-t border-white/20 pt-8 transition-all duration-1000 delay-600 transform ${
            isVisible['footer-bottom'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 flex items-center justify-center md:justify-start space-x-2">
                <span>© {currentYear} Gandal-Technologie. Tous droits réservés.</span>
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <a href="https://orangedigitalcenter.sn/" className="hover:text-blue-300 transition-colors duration-300 hover:scale-105 transform">
                Orange Digital Center
              </a>
              <span className="text-slate-600">•</span>
            </div>
          </div>
        </div>

        {/* Bouton de retour en haut */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        )}
      </div>

      {/* Styles pour les animations personnalisées */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
            }
            50% {
              box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
            }
          }
          
          .animate-glow {
            animation: glow 3s ease-in-out infinite;
          }
        `
      }} />
    </footer>
  );
};

export default Footer;