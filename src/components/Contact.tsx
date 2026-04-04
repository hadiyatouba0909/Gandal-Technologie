import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Localisation',
    content: 'Dakar, Sénégal',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'gandal-technologie@gmail.com',
    link: 'mailto:gandal-technologie@gmail.com',
    gradient: 'from-primary-500 to-primary-400',
  },
  {
    icon: Phone,
    title: 'Téléphone / WhatsApp',
    content: '+221 78 016 04 74',
    link: 'tel:+221780160474',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Lundi - Vendredi: 9h - 18h',
    gradient: 'from-purple-500 to-indigo-500',
  },
];

const socialLinks = [
  { icon: Github, name: 'GitHub', url: '#', color: 'hover:bg-slate-800 hover:text-white' },
  { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:bg-blue-600 hover:text-white' },
  { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:bg-blue-500 hover:text-white' },
  { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:bg-pink-500 hover:text-white' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const header = useInView();
  const content = useInView(0.05);
  const cta = useInView();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulation d'envoi — à remplacer par un vrai appel API
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('sent');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={header.ref}
            className={`text-center mb-12 lg:mb-16 reveal ${
              header.isVisible ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
              <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                Contact
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Une idée ? Un projet ? Nous sommes à votre écoute et prêts à vous
              accompagner.
            </p>
          </div>

          {/* Content */}
          <div
            ref={content.ref}
            className={`grid lg:grid-cols-2 gap-8 sm:gap-10 reveal ${
              content.isVisible ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            {/* Left: Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-2.5 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                    Informations de contact
                  </h3>
                </div>
                <div className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className={`bg-gradient-to-r ${info.gradient} p-2.5 rounded-lg flex-shrink-0`}
                      >
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-700 text-sm mb-0.5">
                          {info.title}
                        </p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-slate-600 hover:text-primary-600 transition-colors text-sm"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-slate-600 text-sm">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-5">
                  Suivez-nous
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border border-slate-100 text-slate-600 transition-all duration-300 text-sm font-medium ${s.color}`}
                    >
                      <s.icon className="w-4 h-4 flex-shrink-0" />
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-2.5 rounded-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                  Envoyez-nous un message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Nom complet *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Sujet *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all outline-none resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                    status === 'sent'
                      ? 'bg-green-500 text-white'
                      : status === 'sending'
                        ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:shadow-lg hover:shadow-primary-600/25'
                  }`}
                >
                  {status === 'sent' ? (
                    <>
                      <CheckCircle className="w-5 h-5" /> Message envoyé !
                    </>
                  ) : status === 'sending' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* CTA */}
          <div
            ref={cta.ref}
            className={`mt-12 lg:mt-16 text-center reveal ${
              cta.isVisible ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
                Prêt à transformer votre{' '}
                <span className="bg-gradient-to-r from-primary-700 to-primary-500 bg-clip-text text-transparent">
                  vision
                </span>{' '}
                en réalité ?
              </h3>
              <p className="text-slate-600 mb-6 text-sm sm:text-base">
                Contactez-nous dès aujourd'hui pour discuter de votre projet.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+221780160474"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" /> Appeler maintenant
                </a>
                <a
                  href="mailto:gandal-technologie@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" /> Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
