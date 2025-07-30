import { ExternalLink, Github, Globe, Monitor, Smartphone } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Plateforme E-commerce",
      type: "Application Web",
      icon: Monitor,
      description: "Une plateforme e-commerce complète avec gestion des produits, panier d'achat et système de paiement intégré.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      name: "Application de Gestion",
      type: "Application Web",
      icon: Monitor,
      description: "Système de gestion d'entreprise avec tableau de bord, gestion des utilisateurs et rapports analytiques.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&h=400",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      name: "Site Vitrine Corporate",
      type: "Site Vitrine",
      icon: Globe,
      description: "Site vitrine moderne et responsive pour une entreprise de services avec présentation complète de l'activité.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "Tailwind CSS", "Vercel"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      name: "App Mobile Fitness",
      type: "Application Mobile",
      icon: Smartphone,
      description: "Application mobile de fitness avec suivi des exercices, plans d'entraînement personnalisés et communauté.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400",
      technologies: ["React Native", "Firebase", "Expo"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      name: "Portfolio Créatif",
      type: "Site Vitrine",
      icon: Globe,
      description: "Portfolio interactif pour un designer graphique avec galerie d'œuvres et système de contact intégré.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      technologies: ["Next.js", "Framer Motion", "Sanity"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 6,
      name: "App de Livraison",
      type: "Application Mobile",
      icon: Smartphone,
      description: "Application de livraison à domicile avec géolocalisation, suivi en temps réel et système de notation.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Site Vitrine":
        return "bg-gandal-cyan text-white";
      case "Application Web":
        return "bg-gandal-blue text-white";
      case "Application Mobile":
        return "bg-gandal-blue-medium text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="realisations" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nos <span className="text-primary">Réalisations</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Découvrez quelques-uns de nos projets récents qui illustrent notre expertise et notre engagement envers l'excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getTypeColor(project.type)}>
                    <project.icon className="h-3 w-3 mr-1" />
                    {project.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {project.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Voir le site
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground font-body mb-6">
            Vous avez un projet en tête ? Discutons-en !
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Démarrer un projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;