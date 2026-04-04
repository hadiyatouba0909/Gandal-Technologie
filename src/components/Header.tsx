import { useState, useEffect } from 'react';
import { Menu, X, Code2, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'values', 'services', 'portfolio', 'team', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#home', id: 'home' },
    { label: 'À propos', href: '#about', id: 'about' },
    { label: 'Nos Valeurs', href: '#values', id: 'values' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Réalisations', href: '#portfolio', id: 'portfolio' },
    { label: 'Équipe', href: '#team', id: 'team' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      {/* Top bar */}
      <div className="bg-gradient-to-r from-primary-800 via-primary-700 to-primary-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 lg:gap-6">
            <a
              href="tel:+221780160474"
              className="flex items-center gap-1.5 hover:text-primary-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+221 78 016 04 74</span>
            </a>
            <a
              href="mailto:gandal-technologie@gmail.com"
              className="flex items-center gap-1.5 hover:text-primary-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden md:inline">gandal-technologie@gmail.com</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-primary-200">
              <Clock className="w-3.5 h-3.5" />
              <span>Lun-Ven: 9h-18h</span>
            </div>
          </div>
          <a
            href="https://wa.me/221780160474"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 px-3 py-1 rounded-full text-xs font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-2.5 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
              <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-800">Gandal-Technologie</h1>
              <p className="text-xs text-slate-500 hidden sm:block">L'innovation au service de vos idées</p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary-600 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 py-3 bg-white rounded-xl shadow-xl border border-slate-100 animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-primary-600 bg-primary-50 border-l-[3px] border-primary-600'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 mx-4 pt-3 border-t border-slate-100">
              <a
                href="https://wa.me/221780160474"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Contactez-nous sur WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
