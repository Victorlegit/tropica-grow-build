import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  DollarSign, 
  Shield, 
  MapPin, 
  Users, 
  TrendingUp, 
  Leaf, 
  Eye 
} from "lucide-react";

const benefits = [
  {
    icon: Building,
    title: "Farm Now, Build Later",
    description: "While your land appreciates, you can put it to work immediately through farming. When you're ready, you can build on it—or even resell at a higher price."
  },
  {
    icon: DollarSign,
    title: "Extra Income While You Wait",
    description: "Instead of leaving your land idle, Tropica helps you turn it into an income-generating farm. With crops like plantain, pineapple, maize, and vegetables, you can earn from harvest cycles."
  },
  {
    icon: Shield,
    title: "Farming Secures Your Land",
    description: "Farming is an age-long and safe way to keep your land active, protected, and legally secure. Active farming discourages encroachment and strengthens your ownership rights."
  },
  {
    icon: MapPin,
    title: "Urban & Rural Farming Options",
    description: "Whether your plot is near the city or in a rural setting, Tropica's agro-allied experts use proven methods (irrigation, greenhouse, intercropping) to make your land productive."
  }
];

const earningPaths = [
  "Direct Food Supply: Harvests delivered to you or your family",
  "Market Sales: Produce sold to trusted off-takers like Tropica Afrikana drinks, restaurants, and open markets",
  "Partnership Farming: Share profits with other Tropica farm owners",
  "Leasing Option: Lease your plot to farmers and earn steady rent while you still own the land"
];

const assurances = [
  "Guaranteed Access to Markets: Tropica Afrikana buys produce directly for its beverages and food business",
  "Expert Farm Management: If you can't farm, Tropica experts will manage your crops and share yield reports",
  "Flexible Crop Choices: From short-cycle vegetables to long-term cash crops, owners can diversify their income streams",
  "Consistent Updates: Quarterly farm reports, photos, and income breakdowns for transparency"
];

export const AdditionalBenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        {/* Main Benefits */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-earth text-earth">
              Complete Advantage
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Tropica Farm?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tropica Farms are strategically located to let you farm today and build tomorrow. 
              Every plot is chosen with future development in mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 bg-card border border-border group">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-earth/10 rounded-lg flex items-center justify-center group-hover:bg-earth group-hover:text-earth-foreground transition-colors duration-300 flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-earth group-hover:text-earth-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Multiple Earning Paths */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Multiple Earning Paths
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {earningPaths.map((path, index) => (
              <Card key={index} className="p-6 bg-card border border-border hover:border-success/50 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center text-success-foreground font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-card-foreground">{path}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Tropica Assurance */}
        <div>
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-success text-success">
              Tropica Assurance
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Extra Income & Food Supply Guaranteed
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {assurances.map((assurance, index) => (
              <Card key={index} className="p-6 bg-card border border-border hover:shadow-md transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Eye className="w-3 h-3 text-success-foreground" />
                  </div>
                  <p className="text-card-foreground leading-relaxed">{assurance}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};