import { CheckCircle, Target, Users, Lightbulb, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Simplicité",
      description: "Des interfaces accessibles, des fonctionnalités claires, des expériences fluides."
    },
    {
      icon: Shield,
      title: "Confiance",
      description: "Nous bâtissons des relations solides, honnêtes et transparentes avec nos clients."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "En veille permanente, nous utilisons les technologies les plus récentes pour des solutions performantes."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Deux cerveaux, deux sensibilités, un objectif commun : faire réussir votre projet."
    },
    {
      icon: CheckCircle,
      title: "Responsabilité",
      description: "Chaque ligne de code, chaque livraison est faite avec sérieux, engagement et respect des délais."
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            À Propos de{" "}
            <span className="text-primary">Gandal-Technologie</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-6">
              Gandal-Technologie, c'est l'histoire de deux passionnés du numérique, une développeuse et un développeur qui ont décidé de mettre leur énergie, leur complémentarité et leur vision commune au service de la transformation digitale en Afrique et au-delà.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-6">
              Nés d'un désir de créer, d'innover et de servir, nous sommes une jeune équipe dynamique, créative et ambitieuse, spécialisée dans le développement web et mobile full stack. Chaque projet que nous acceptons est une aventure que nous vivons à fond : avec rigueur, écoute, curiosité, et un engagement total pour la qualité.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8">
              Chez Gandal-Technologie, nous croyons que chaque idée, petite ou grande, mérite d'exister, de grandir et de rayonner. Nous ne nous contentons pas de faire du code : nous bâtissons des solutions technologiques sur mesure, pensées pour l'humain, orientées vers l'impact, et taillées pour durer.
            </p>
          </div>

          <div className="bg-primary/10 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4 text-center">
              Notre mission : "Gandal"
            </h3>
            <p className="text-lg text-muted-foreground font-body text-center leading-relaxed">
              Notre nom, <strong>"Gandal"</strong>, qui signifie <em>savoir</em> en peulh, est un hommage à nos racines et à notre mission :
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <div className="flex-1 flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground font-body">
                  Mettre la connaissance et la technologie au service du développement local
                </p>
              </div>
              <div className="flex-1 flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground font-body">
                  Valoriser le talent africain avec des outils numériques modernes
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Nos valeurs fondamentales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;