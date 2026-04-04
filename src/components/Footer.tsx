import { useState, useEffect } from 'react';
import {
  Code2,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowUp,
} from 'lucide-react';

const quickLinks = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Nos Valeurs', href: '#values' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#portfolio' },
  { label: 'Équipe', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/221780160474',
    external: true,
  },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-2.5 rounded-xl">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Gandal-Technologie</h3>
                <p className="text-sm text-slate-400">
                  L'innovation au service de vos idées
                </p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              Spécialisés dans le développement web et mobile full stack, nous
              transformons vos idées en solutions digitales performantes et sur mesure.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:gandal-technologie@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-primary-300 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                gandal-technologie@gmail.com
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Dakar, Sénégal
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Liens rapides</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Suivez-nous</h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.external ? '_blank' : undefined}
                  rel={s.external ? 'noopener noreferrer' : undefined}
                  className="bg-white/10 p-2.5 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Gandal-Technologie. Tous droits réservés.
          </p>
          <a
            href="https://orangedigitalcenter.sn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-primary-300 transition-colors"
          >
            Orange Digital Center
          </a>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
