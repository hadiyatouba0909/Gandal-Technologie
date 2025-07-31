import { useState, useEffect } from 'react';
import { Menu, X, Code2, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Nos Valeurs', href: '#values' },
    { name: 'Services', href: '#services' },
    { name: 'Réalisations', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white shadow-xl' 
        : 'bg-white shadow-lg'
    }`}>
<<<<<<< HEAD
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
=======
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-3 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="group flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">+221 77 123 45 67</span>
            </div>
            <div className="group flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                <Mail className="w-4 h-4" />
              </div>
              <span className="hidden md:inline">gandal.technologie@gmail.com</span>
            </div>
            <div className="group flex items-center space-x-2 hover:text-blue-300 transition-colors duration-300">
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
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
<<<<<<< HEAD
            className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-1 sm:space-x-2"
          >
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
=======
            className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
          </a>
        </div>
      </div>

<<<<<<< HEAD
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
=======
      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="group flex items-center space-x-3 cursor-pointer">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Code2 className="w-8 h-8 text-white" />
            </div>
            <div className="transition-all duration-300">
              <h1 className="text-2xl font-bold text-slate-800 transition-colors duration-300">
                Gandal-Technologie
              </h1>
              <p className="text-sm text-slate-600 transition-colors duration-300">
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
                L'innovation au service de vos idées
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
<<<<<<< HEAD
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-base lg:text-lg font-medium text-slate-700 transition-colors duration-300 text-blue-900">
=======
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium text-slate-700 transition-colors duration-300 text-blue-900">
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="font-semibold transition-all duration-300 relative group py-2 px-1 text-slate-700 hover:text-blue-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full`}></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </div>
<<<<<<< HEAD
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110 bg-slate-100 text-slate-700 hover:bg-slate-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Mobile First */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 sm:mt-6 pb-4 sm:pb-6 border-t border-slate-200 bg-white rounded-xl sm:rounded-2xl mx-2 sm:mx-4">
            <div className="pt-4 sm:pt-6 space-y-1 sm:space-y-2">
=======
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110 bg-slate-100 text-slate-700 hover:bg-slate-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-slate-200 bg-white rounded-2xl mx-4">
            <div className="pt-6 space-y-2">
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
<<<<<<< HEAD
                  className="block py-2 sm:py-3 px-3 sm:px-4 font-semibold transition-all duration-300 rounded-lg sm:rounded-xl hover:scale-105 text-slate-700 hover:text-blue-600 hover:bg-blue-50"
=======
                  className="block py-3 px-4 font-semibold transition-all duration-300 rounded-xl hover:scale-105 text-slate-700 hover:text-blue-600 hover:bg-blue-50"
>>>>>>> f893693 ([200~Initial commit : mise en place du projet Gandal-Technologie)
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </a>
              ))}
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