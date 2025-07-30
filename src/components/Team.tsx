import { Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Hadiyatou BA",
      role: "Co-fondatrice & Développeuse Full Stack Web & Mobile",
      quote: "Mon objectif : créer des interfaces intuitives et accessibles, qui allient design et performance.",
      specialization: "Frontend et Backend",
      passion: "Passionnée par l'impact social de la tech et la place des femmes dans le numérique.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=400&h=400",
      social: {
        github: "#",
        linkedin: "#",
        email: "hadiyatou@gandal-technologie.com"
      }
    },
    {
      id: 2,
      name: "Ibrahima Sory Diallo",
      role: "Co-fondateur & Développeur Full Stack Web & Mobile",
      quote: "J'aime transformer les idées en solutions concrètes qui répondent à des vrais besoins.",
      specialization: "Backend et Frontend",
      passion: "Passionné par l'innovation, l'optimisation et la culture open source.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400",
      social: {
        github: "#",
        linkedin: "#",
        email: "ibrahima@gandal-technologie.com"
      }
    }
  ];

  return (
    <section id="equipe" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Notre <span className="text-primary">Équipe</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Chez Gandal-Technologie, derrière chaque ligne de code, il y a des personnes passionnées, engagées et complémentaires. Découvrez qui nous sommes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary font-semibold font-body text-sm mb-3">
                        {member.role}
                      </p>
                    </div>
                    
                    <blockquote className="border-l-4 border-primary pl-4 mb-4">
                      <p className="text-muted-foreground font-body italic leading-relaxed">
                        "{member.quote}"
                      </p>
                    </blockquote>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm">
                        <span className="font-semibold text-foreground">Spécialisé en :</span>{" "}
                        <span className="text-muted-foreground">{member.specialization}</span>
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {member.passion}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(member.social.linkedin, '_blank')}
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(member.social.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.location.href = `mailto:${member.social.email}`}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Prêts à collaborer avec vous
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Notre complémentarité et notre passion commune font notre force. Nous sommes prêts à mettre notre expertise à votre service pour donner vie à vos projets digitaux.
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
              Rencontrons-nous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;