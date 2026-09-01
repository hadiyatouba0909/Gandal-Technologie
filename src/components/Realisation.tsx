import { useState } from 'react';
import { ExternalLink, Github, Globe, Monitor, Smartphone, type LucideIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Project {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
  icon: LucideIcon;
  tech: string[];
  liveUrl?: string;
  githubFrontend?: string;
  githubBackend?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    type: 'Application Web',
    description:
      'Plateforme e-commerce complète avec gestion des stocks, paiements en ligne et tableau de bord administrateur.',
    image:
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Monitor,
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    name: 'Restaurant Mobile App',
    type: 'Application Mobile',
    description:
      'Application mobile pour commande de repas avec géolocalisation, paiement intégré et suivi de livraison.',
    image:
      'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Smartphone,
    tech: ['React Native', 'Firebase', 'Stripe'],
  },
  {
    id: 3,
    name: 'Portfolio Architecte',
    type: 'Site Vitrine',
    description:
      "Site vitrine élégant pour un cabinet d'architecture avec galerie interactive et formulaire de contact.",
    image:
      'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Globe,
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    id: 4,
    name: 'Portfolio Créatif Designer',
    type: 'Portfolio',
    description:
      'Portfolio interactif pour un designer graphique avec galerie de projets, animations fluides et expérience immersive.',
    image:
      'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Globe,
    tech: ['React', 'Three.js', 'GSAP'],
  },
  {
    id: 5,
    name: 'Portfolio Photographe',
    type: 'Portfolio',
    description:
      'Site portfolio pour photographe professionnel avec galerie haute définition, système de booking et blog intégré.',
    image:
      'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Globe,
    tech: ['Vue.js', 'Nuxt.js', 'Strapi'],
  },
  {
    id: 6,
    name: 'Dashboard Analytics',
    type: 'Application Web',
    description:
      'Tableau de bord analytique en temps réel avec visualisations de données et rapports personnalisés.',
    image:
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Monitor,
    tech: ['Vue.js', 'D3.js', 'Express'],
  },
  {
    id: 7,
    name: 'Fédération Shaolin Sénégal',
    type: 'Site web',
    description:
      'Site officiel de la Fédération Shaolin Sénégal : présentation des clubs, actualités et gestion de contenu via une API dédiée.',
    image:
      'https://shaolin-senegal.com/images/delegation/delegation-banniere-temple.jpeg',
    icon: Globe,
    tech: ['React', 'Node.js', 'API REST'],
    liveUrl: 'https://shaolin-senegal.com',
    githubFrontend: 'https://github.com/IbrahimaISIDev/Federation-Shaolin-Senegal-Frontend',
    githubBackend: 'https://github.com/IbrahimaISIDev/Shaolin-Federation-Senegal-API-Backend',
  },
  {
    id: 8,
    name: 'Abu Maryam TV',
    type: 'Site Web',
    description:
      'Plateforme d\'enseignement islamique avec bibliothèque de cours, diffusion en direct des conférences et gestion des événements.',
    image: 'https://abou-maryam.com/images/oustaz-niang-mbaye1.jpeg',
    icon: Globe,
    tech: ['React', 'Node.js', 'API REST'],
    liveUrl: 'https://abou-maryam.com/fr',
    githubFrontend: 'https://github.com/IbrahimaISIDev/abu-maryam-project',
  },
  {
    id: 9,
    name: 'MIMAP',
    type: 'Site Web',
    description:
      "Site web d'un cabinet médical mauritanien : présentation des services, de l'équipe médicale et prise de contact.",
    image: 'https://mimapeds.com/Image%20docteur.png',
    icon: Globe,
    tech: ['React', 'Node.js', 'API REST'],
    liveUrl: 'https://mimapeds.com',
    githubFrontend: 'https://github.com/hadiyatouba0909/projet-khadija',
  },
  {
    id: 10,
    name: 'MIMAP Workspace',
    type: 'Application Web',
    description:
      'Espace professionnel de santé sécurisé pour la gestion des patients, des médecins et de l\'administration du cabinet MIMAP.',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: Monitor,
    tech: ['React', 'Node.js', 'API REST'],
    liveUrl: 'https://workspace.mimapeds.com/login',
  },
];

const filters = ['Tous', 'Site Vitrine', 'Site Web', 'Application Web', 'Application Mobile', 'Portfolio'];

const badgeColors: Record<string, string> = {
  'Site Vitrine': 'bg-green-50 text-green-700',
  'Site Web': 'bg-teal-50 text-teal-700',
  'Application Web': 'bg-primary-50 text-primary-700',
  'Application Mobile': 'bg-purple-50 text-purple-700',
  Portfolio: 'bg-orange-50 text-orange-700',
};

const Realisation = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');
  const header = useInView();
  const grid = useInView(0.05);

  const filtered =
    activeFilter === 'Tous'
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-28 bg-slate-50">
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
                Nos Réalisations
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6 rounded-full" />
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez quelques-uns de nos projets récents qui illustrent notre expertise et
              notre passion pour l'innovation digitale.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-2 bg-white p-1.5 rounded-xl shadow-sm border border-slate-100">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeFilter === f
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div
            ref={grid.ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal ${
              grid.isVisible ? 'reveal-visible' : 'reveal-hidden'
            }`}
          >
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                        aria-label={`Voir ${project.name}`}
                      >
                        <ExternalLink className="w-4 h-4 text-slate-700" />
                      </a>
                    ) : (
                      <button
                        className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                        aria-label={`Voir ${project.name}`}
                      >
                        <ExternalLink className="w-4 h-4 text-slate-700" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2.5 mb-3">
                    <project.icon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <h3 className="text-lg font-bold text-slate-800 truncate">
                      {project.name}
                    </h3>
                  </div>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 ${
                      badgeColors[project.type] || 'bg-slate-50 text-slate-600'
                    }`}
                  >
                    {project.type}
                  </span>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-3">
                    {project.description}
                  </p>
                  {(project.liveUrl || project.githubFrontend || project.githubBackend) && (
                    <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 hover:text-primary-700"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          Site en ligne
                        </a>
                      )}
                      {project.githubFrontend && (
                        <a
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-primary-600"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Frontend
                        </a>
                      )}
                      {project.githubBackend && (
                        <a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 hover:text-primary-600"
                        >
                          <Github className="w-3.5 h-3.5" />
                          Backend
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realisation;
