import { Globe, Monitor, Smartphone, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Création de sites web sur mesure",
      description: "Sites vitrines, blogs professionnels, portfolios — nous créons des interfaces élégantes, responsives et optimisées pour le web.",
      features: ["Design responsive", "Optimisation SEO", "Interface intuitive", "Performance optimisée"]
    },
    {
      icon: Monitor,
      title: "Développement d'applications web",
      description: "Applications de gestion, plateformes collaboratives, tableaux de bord — nous développons des solutions puissantes et sécurisées côté web.",
      features: ["Architecture scalable", "Sécurité renforcée", "Interface moderne", "Intégrations API"]
    },
    {
      icon: Smartphone,
      title: "Développement d'applications mobiles",
      description: "Pour Android et iOS, nous créons des apps fluides et intuitives, pensées pour l'expérience utilisateur.",
      features: ["Cross-platform", "UX optimisée", "Performance native", "App Store ready"]
    }
  ];

  const benefits = [
    "Réactifs : vos idées prennent vie rapidement",
    "Flexibles : nous nous adaptons à vos besoins et à votre budget",
    "Engagés : votre satisfaction est notre priorité",
    "Locaux et connectés au monde : nous comprenons vos réalités et apportons des solutions globales"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
            Chez Gandal-Technologie, nous vous accompagnons dans la conception et le développement de solutions digitales modernes, performantes et adaptées à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
              Pourquoi choisir <span className="text-primary">Gandal-Technologie</span> ?
            </h3>
            <p className="text-lg text-muted-foreground font-body mb-8">
              Parce que nous sommes :
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground font-body leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4"
              onClick={scrollToContact}
            >
              Discutons de votre projet
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;