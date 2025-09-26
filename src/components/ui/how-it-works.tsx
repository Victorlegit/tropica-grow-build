import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, UserPlus, MapPin, Settings, TrendingUp, Building } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Join the Waitlist",
    description: "Secure priority access to premium farmland plots.",
    action: "Get Started"
  },
  {
    icon: MapPin,
    title: "Choose Your Plot",
    description: "Get title docs and comprehensive soil report.",
    action: "Select Land"
  },
  {
    icon: Settings,
    title: "Decide Your Model",
    description: "Self-farm or choose our managed farming service.",
    action: "Pick Strategy"
  },
  {
    icon: TrendingUp,
    title: "Earn from Farming",
    description: "Generate income while your land appreciates in value.",
    action: "Start Earning"
  },
  {
    icon: Building,
    title: "Build Later",
    description: "Develop your home, warehouse, lodge, or agro-business.",
    action: "Future Development"
  }
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-success text-success">
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From joining our waitlist to building your future - here's your journey to farmland ownership.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border border-border group">
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="w-8 h-8 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  <Badge variant="secondary" className="text-xs">
                    {step.action}
                  </Badge>
                </Card>
                
                {/* Arrow connector - hidden on last item */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};