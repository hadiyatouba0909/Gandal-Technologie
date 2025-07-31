import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: 'Hadiyatou BA',
      role: 'Co-fondatrice & Développeuse Full Stack Web & Mobile',
      quote: 'Mon objectif : créer des interfaces intuitives et accessibles, qui allient design et performance.',
      specialization: 'Spécialisée en Frontend et Backend',
      passion: 'Passionnée par l\'impact social de la tech et la place des femmes dans le numérique.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-pink-400 to-purple-500',
      socials: {
        github: '#',
        linkedin: '#',
        email: 'hadiyatou@gandal-technologie.com'
      },
      skills: ['React', 'Vue.js', 'Node.js', 'UI/UX'],
      experience: '5+ années'
    },
    {
      name: 'Ibrahima Sory Diallo',
      role: 'Co-fondateur & Développeur Full Stack Web & Mobile',
      quote: 'J\'aime transformer les idées en solutions concrètes qui répondent à des vrais besoins.',
      specialization: 'Spécialisé en Backend et Frontend',
      passion: 'Passionné par l\'innovation, l\'optimisation et la culture open source.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-blue-400 to-cyan-500',
      socials: {
        github: '#',
        linkedin: '#',
        email: 'ibrahima@gandal-technologie.com'
      },
      skills: ['Python', 'Django', 'React', 'DevOps'],
      experience: '6+ années'
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

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Particules flottantes décoratives */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header avec animation */}
          <div 
            id="team-header"
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible['team-header'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
             <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent"> Notre Équipe</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Chez Gandal-Technologie, derrière chaque ligne de code, il y a des personnes passionnées, engagées et complémentaires. Découvrez qui nous sommes.
            </p>
          </div>



          {/* Membres de l'équipe */}
          <div 
            id="team-members"
            className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-500 transform ${
              isVisible['team-members'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`group relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/30 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 text-center overflow-hidden ${
                  hoveredMember === index ? 'scale-105' : ''
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                {/* Gradient de fond animé */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Photo avec effets */}
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      {/* Cercle animé en arrière-plan */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      <div className={`absolute inset-2 bg-gradient-to-r ${member.gradient} rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:animate-ping`}></div>
                      
                      {/* Photo */}
                      <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white shadow-xl group-hover:ring-8 transition-all duration-500">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    {/* Badge Co-fondateur */}
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${member.gradient} text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      Co-fondateur{index === 0 ? 'trice' : ''}
                    </div>
                  </div>

                  {/* Informations personnelles */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pink-600 group-hover:to-blue-600 transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-slate-600 font-medium mb-3 group-hover:text-slate-700 transition-colors duration-300">
                      {member.role}
                    </p>
                    
                    {/* Expérience et compétences */}
                    <div className="flex justify-center space-x-4 mb-3">
                      <span className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-slate-700 border border-white/30">
                        {member.experience}
                      </span>
                      <span className={`bg-gradient-to-r ${member.gradient} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
                        Full Stack
                      </span>
                    </div>
                  </div>
                  
                  {/* Carte de citation avec glassmorphism */}
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 mb-4 text-left border border-white/30 group-hover:bg-white/70 transition-all duration-300">
                    <p className="text-slate-700 italic mb-3 text-base leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                      "{member.quote}"
                    </p>
                    <div className="space-y-2">
                      <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 text-sm">
                        <span className="font-semibold text-slate-800">🎯 Spécialisation:</span> {member.specialization}
                      </p>
                      <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 text-sm">
                        <span className="font-semibold text-slate-800">❤️ Passion:</span> {member.passion}
                      </p>
                    </div>
                    
                    {/* Compétences techniques */}
                    <div className="mt-3">
                      <p className="text-xs font-semibold text-slate-800 mb-2">🛠️ Compétences clés:</p>
                      <div className="flex flex-wrap gap-1">
                        {member.skills.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="bg-white/70 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-slate-700 border border-white/30 hover:scale-105 transition-transform duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Réseaux sociaux avec animations */}
                  <div className="flex justify-center space-x-3">
                    <a 
                      href={member.socials.github}
                      className="group/social bg-slate-800 text-white p-3 rounded-full hover:bg-slate-700 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4 group-hover/social:animate-bounce" />
                    </a>
                    <a 
                      href={member.socials.linkedin}
                      className="group/social bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 group-hover/social:animate-bounce" />
                    </a>
                    <a 
                      href={`mailto:${member.socials.email}`}
                      className={`group/social bg-gradient-to-r ${member.gradient} text-white p-3 rounded-full hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg`}
                      title="Email"
                    >
                      <Mail className="w-4 h-4 group-hover/social:animate-bounce" />
                    </a>
                  </div>

                  {/* Ligne décorative */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${member.gradient} mt-4 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles pour les animations personnalisées */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(5deg);
            }
          }
          
          @keyframes pulse-ring {
            0% {
              transform: scale(0.8);
              opacity: 1;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          .animate-pulse-ring {
            animation: pulse-ring 2s infinite;
          }
        `
      }} />
    </section>
  );
};

export default Team;