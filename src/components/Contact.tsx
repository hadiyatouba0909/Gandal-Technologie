import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Facebook, Instagram, MessageCircle, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Localisation',
      content: 'Dakar, Sénégal',
      gradient: 'from-red-400 to-pink-500',
      delay: '0ms'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'gandal.technologie@gmail.com',
      link: 'mailto:gandal.technologie@gmail.com',
      gradient: 'from-blue-400 to-cyan-500',
      delay: '100ms'
    },
    {
      icon: Phone,
      title: 'Téléphone / WhatsApp',
      content: '+221 77 123 45 67',
      link: 'tel:+221771234567',
      gradient: 'from-green-400 to-emerald-500',
      delay: '200ms'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lundi - Vendredi: 9h - 18h',
      gradient: 'from-purple-400 to-indigo-500',
      delay: '300ms'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', url: '#', gradient: 'from-gray-600 to-gray-800' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', gradient: 'from-blue-500 to-blue-700' },
    { icon: Facebook, name: 'Facebook', url: '#', gradient: 'from-blue-400 to-blue-600' },
    { icon: Instagram, name: 'Instagram', url: '#', gradient: 'from-pink-400 to-red-500' },
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

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 via-blue-500 to-indigo-100 relative overflow-hidden">
      {/* Particules flottantes décoratives */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header avec animation */}
          <div 
            id="contact-header"
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible['contact-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">Contact</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Une idée ? Un projet ? Une question ? Nous sommes à votre écoute et prêts à vous accompagner dans vos ambitions digitales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div 
              id="contact-info"
              className={`space-y-8 transition-all duration-1000 delay-300 transform ${
                isVisible['contact-info'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              {/* Informations de contact */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 hover:bg-white/90 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Informations de contact</h3>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/60 transition-all duration-300"
                      style={{ animationDelay: info.delay }}
                    >
                      <div className={`bg-gradient-to-r ${info.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-slate-600 hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-1 block transform"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 hover:bg-white/90 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-gradient-to-r from-pink-500 to-red-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">Suivez-nous</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`group flex items-center space-x-3 p-4 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-gradient-to-r ${social.gradient} hover:text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg border border-white/30`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <social.icon className="w-5 h-5 group-hover:animate-bounce" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div 
              id="contact-form"
              className={`transition-all duration-1000 delay-500 transform ${
                isVisible['contact-form'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/30 hover:bg-white/90 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Gradient de fond animé */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">Envoyez-nous un message</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Vous avez un besoin spécifique ou simplement envie d'échanger avec nous ? 
                    Envoyez-nous un message et nous vous répondrons rapidement.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Nom complet *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 bg-white/60 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 ${
                              focusedField === 'name'
                                ? 'border-blue-500 shadow-lg scale-105'
                                : 'border-white/30 hover:border-blue-300'
                            }`}
                            placeholder="Votre nom complet"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 bg-white/60 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 ${
                              focusedField === 'email'
                                ? 'border-blue-500 shadow-lg scale-105'
                                : 'border-white/30 hover:border-blue-300'
                            }`}
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Sujet *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-white/60 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 ${
                            focusedField === 'subject'
                              ? 'border-blue-500 shadow-lg scale-105'
                              : 'border-white/30 hover:border-blue-300'
                          }`}
                          placeholder="Sujet de votre message"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message *
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows={6}
                          className={`w-full px-4 py-3 bg-white/60 backdrop-blur-sm border-2 rounded-2xl transition-all duration-300 resize-none ${
                            focusedField === 'message'
                              ? 'border-blue-500 shadow-lg scale-105'
                              : 'border-white/30 hover:border-blue-300'
                          }`}
                          placeholder="Décrivez votre projet ou votre demande..."
                        />
                      </div>
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting || isSubmitted}
                      className={`w-full py-4 px-6 rounded-2xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 shadow-lg ${
                        isSubmitted
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                          : isSubmitting
                          ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl'
                      }`}
                    >
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Message envoyé !</span>
                        </>
                      ) : isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          <span>Envoyer le message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section call-to-action supplémentaire */}
          <div 
            id="contact-cta"
            className={`mt-16 text-center transition-all duration-1000 delay-700 transform ${
              isVisible['contact-cta'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="bg-white/40 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                Prêt à transformer votre <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">vision</span> en réalité ?
              </h3>
              <p className="text-slate-600 mb-6">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs digitaux.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+221771234567" 
                  className="group bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Appeler maintenant</span>
                </a>
                <a 
                  href="mailto:gandal.technologie@gmail.com" 
                  className="group bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Envoyer un email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles pour les animations personnalisées */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `
      }} />
    </section>
  );
};

export default Contact;