import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sprout, 
  Shield, 
  Users, 
  TrendingUp, 
  Truck, 
  Droplets, 
  Eye 
} from "lucide-react";

const advantages = [
  {
    icon: Sprout,
    title: "Farm-to-Table Integration",
    description: "Your crops can directly supply Tropica Afrikana."
  },
  {
    icon: Shield,
    title: "Full Security & Community Support",
    description: "We negotiate and protect your investment legally."
  },
  {
    icon: Users,
    title: "Expert Management Option",
    description: "Agronomists, soil scientists, and farm hands available."
  },
  {
    icon: TrendingUp,
    title: "Long-term Appreciation",
    description: "Land increases in value every year, regardless of farming."
  },
  {
    icon: Truck,
    title: "Ease of Access",
    description: "Farm tour buses and easy site visits."
  },
  {
    icon: Droplets,
    title: "Sustainable Practices",
    description: "Irrigation, organic options, and climate-smart farming."
  },
  {
    icon: Eye,
    title: "Transparency & Trust",
    description: "You receive quarterly updates, photos, and yield reports."
  }
];

export const AdvantagesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-primary text-primary">
            The Tropica Advantage
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Tropica Farm?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect blend of modern farming technology and traditional agricultural wisdom.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-card border border-border group hover:border-primary/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <advantage.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                  🌱 {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};