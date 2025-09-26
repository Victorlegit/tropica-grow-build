import { Card } from "@/components/ui/card";
import { Briefcase, Users, Globe, Home, Building } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Young Professionals",
    description: "Who want secure assets and extra income.",
    color: "primary"
  },
  {
    icon: Users,
    title: "Families",
    description: "Who want to beat high food prices.",
    color: "secondary"
  },
  {
    icon: Globe,
    title: "Investors & Diaspora Nigerians",
    description: "Seeking safe land ownership with ongoing ROI.",
    color: "accent"
  },
  {
    icon: Home,
    title: "Retirees",
    description: "Looking for stable farmland income.",
    color: "earth"
  },
  {
    icon: Building,
    title: "Future Builders",
    description: "Who want land that can later host a home, factory, or storage facility.",
    color: "success"
  }
];

export const AudienceSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who Is Tropica Farm For?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {audiences.map((audience, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border border-border group">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <audience.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};