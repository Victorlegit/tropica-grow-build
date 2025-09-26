import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Users, FileText, TrendingUp, Handshake, ScrollText } from "lucide-react";

const advantages = [
  {
    icon: Home,
    title: "You own the land in your name",
    description: "Full legal ownership with proper documentation"
  },
  {
    icon: Users,
    title: "Farm it yourself OR engage our agro-allied experts",
    description: "Flexible farming management options"
  },
  {
    icon: TrendingUp,
    title: "You can lease it, resell it, or reserve it for future building",
    description: "Multiple exit strategies and future opportunities"
  },
  {
    icon: Handshake,
    title: "We link your produce to reliable off-takers",
    description: "Connected to Tropica Afrikana drinks, restaurants, and food markets"
  },
  {
    icon: ScrollText,
    title: "Full documentation, soil tests, and transparent management",
    description: "Complete transparency and professional agricultural support"
  }
];

export const DifferenceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Makes Tropica Farm Different?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground mb-6">
              Most "farm investment programs" let you only earn from crops…
            </p>
            <Badge variant="outline" className="text-lg px-6 py-2 border-success text-success">
              ✅ But Tropica Farm makes you a landowner first.
            </Badge>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 bg-card border border-border group hover:border-primary/30">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <advantage.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};