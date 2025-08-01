import { useState, useEffect } from 'react';
import { Menu, X, Code2, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Détecter la section active
      const sections = ['home', 'about', 'values', 'services', 'portfolio', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', href: '#home', id: 'home' },
    { name: 'À propos', href: '#about', id: 'about' },
    { name: 'Nos Valeurs', href: '#values', id: 'values' },
    { name: 'Nos Services', href: '#services', id: 'services' },
    { name: 'Nos Réalisations', href: '#portfolio', id: 'portfolio'},
    { name: 'Notre Équipe', href: '#team', id: 'team' },
    { name: 'Nous Contacter', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white shadow-xl' 
        : 'bg-white shadow-lg'
    }`}>
      {/* Top contact bar - Mobile First */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-2 px-3 text-xs sm:py-3 sm:px-4 sm:text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
            <div className="group flex items-center space-x-1 sm:space-x-2 hover:text-blue-300 transition-colors duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-1 sm:p-1.5 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <span className="hidden sm:inline">+221 77 123 45 67</span>
            </div>
            <div className="group flex items-center space-x-1 sm:space-x-2 hover:text-blue-300 transition-colors duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-1 sm:p-1.5 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              <span className="hidden md:inline">gandal.technologie@gmail.com</span>
            </div>
            <div className="group hidden sm:flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                <Clock className="w-4 h-4" />
              </div>
              <span className="hidden lg:inline">Lun-Ven: 9h-18h</span>
            </div>
          </div>
          <a 
            href="https://wa.me/221771234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-1 sm:space-x-2"
          >
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main navigation - Mobile First */}
      <nav className="container mx-auto px-3 py-3 sm:px-4 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo - Mobile First */}
          <div className="group flex items-center space-x-2 sm:space-x-3 cursor-pointer">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="transition-all duration-300">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 transition-colors duration-300">
                Gandal-Technologie
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 transition-colors duration-300">
                L'innovation au service de vos idées
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-base lg:text-lg font-medium text-slate-700 transition-colors duration-300 text-blue-900">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-semibold transition-all duration-300 relative group py-2 px-1 hover:text-blue-600 ${
                  activeSection === item.id 
                    ? 'text-blue-600' 
                    : 'text-slate-700'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 rounded-full ${
                  activeSection === item.id 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 bg-slate-100 text-slate-700 hover:bg-slate-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Style amélioré et fonctionnel */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-xl shadow-2xl border border-slate-200 mx-2">
            <div className="py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block py-3 px-4 mx-2 font-semibold transition-all duration-300 rounded-xl border-l-4 transform ${
                    activeSection === item.id 
                      ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-500 shadow-sm translate-x-1' 
                      : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50 border-transparent hover:border-blue-200'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideIn 0.3s ease-out forwards'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    {activeSection === item.id && (
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </a>
              ))}
              
              {/* Contact rapide en bas du menu mobile */}
              <div className="mt-4 pt-4 border-t border-slate-200 mx-2">
                <a 
                  href="https://wa.me/221771234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Styles pour les animations personnalisées */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          .animate-slide-in {
            animation: slideIn 0.5s ease-out forwards;
          }
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `
      }} />
    </header>
  );
};

export default Header;