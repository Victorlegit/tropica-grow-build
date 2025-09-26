import { Card } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Shield, Users } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Food Prices Are Rising",
    description: "With food inflation at an all-time high, farmland is the new gold."
  },
  {
    icon: Shield,
    title: "Secure Your Food Supply",
    description: "Farming helps you save money by producing what you eat."
  },
  {
    icon: CheckCircle,
    title: "Passive Income",
    description: "With Tropica Farm, your land can generate cash flow every harvest."
  },
  {
    icon: Users,
    title: "Dual Benefit",
    description: "While your crops earn, your land itself appreciates in value."
  }
];

export const FeatureSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Farmland Now?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border border-border">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};