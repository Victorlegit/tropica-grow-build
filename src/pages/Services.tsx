import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Users, 
  Sprout, 
  TrendingUp, 
  Shield, 
  FileText,
  Truck,
  BarChart3,
  CheckCircle,
  Clock,
  Star,
  Droplets
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Land Acquisition & Documentation",
    description: "We handle the complete process of identifying, purchasing, and documenting farmland with proper legal titles.",
    features: [
      "Comprehensive land survey and soil testing",
      "Legal documentation and title processing",
      "Location scouting with future development potential",
      "Government permit acquisition"
    ],
    price: "From ₦500,000"
  },
  {
    icon: Users,
    title: "Professional Farm Management",
    description: "Expert agronomists and farm managers handle all aspects of crop production on your behalf.",
    features: [
      "Crop planning and seasonal scheduling",
      "Professional farming team deployment",
      "Equipment and input procurement",
      "Quarterly progress reports with photos"
    ],
    price: "15% of harvest value"
  },
  {
    icon: Sprout,
    title: "Crop Production & Optimization",
    description: "We maximize your land's productivity through modern farming techniques and crop diversification.",
    features: [
      "High-yield crop variety selection",
      "Organic and sustainable farming practices",
      "Pest and disease management",
      "Harvest timing optimization"
    ],
    price: "Included in management"
  },
  {
    icon: TrendingUp,
    title: "Market Linkage & Sales",
    description: "Direct connection to reliable buyers including Tropica Afrikana and other premium off-takers.",
    features: [
      "Guaranteed market for produce",
      "Premium pricing negotiations",
      "Post-harvest processing coordination",
      "Direct farm-to-table supply chains"
    ],
    price: "10% commission"
  },
  {
    icon: Shield,
    title: "Land Security & Monitoring",
    description: "24/7 protection and monitoring of your farmland investment to prevent encroachment.",
    features: [
      "Regular site visits and security patrols",
      "Boundary marking and maintenance",
      "Encroachment prevention and resolution",
      "Insurance coverage options"
    ],
    price: "₦50,000/year"
  },
  {
    icon: FileText,
    title: "Investment Advisory",
    description: "Strategic guidance to maximize returns and plan for future development opportunities.",
    features: [
      "ROI analysis and projections",
      "Exit strategy planning",
      "Development potential assessment",
      "Tax optimization guidance"
    ],
    price: "Complimentary"
  }
];

const packages = [
  {
    name: "Starter Package",
    price: "₦1,000,000",
    duration: "1-2 Acres",
    description: "Perfect for first-time farmland investors",
    features: [
      "Land acquisition and documentation",
      "Basic farm management",
      "Seasonal crop production",
      "Market linkage support",
      "Quarterly reports"
    ],
    popular: false
  },
  {
    name: "Growth Package",
    price: "₦3,000,000",
    duration: "3-5 Acres",
    description: "Ideal for serious agricultural investors",
    features: [
      "Everything in Starter Package",
      "Advanced crop diversification",
      "Irrigation system installation",
      "Premium market access",
      "Monthly site visits",
      "Insurance coverage"
    ],
    popular: true
  },
  {
    name: "Premium Package",
    price: "₦7,000,000",
    duration: "6+ Acres",
    description: "Complete agricultural investment solution",
    features: [
      "Everything in Growth Package",
      "Dedicated farm manager",
      "Processing facility access",
      "Export market connections",
      "Future development planning",
      "Priority land selection"
    ],
    popular: false
  }
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "Free consultation to understand your investment goals and budget."
  },
  {
    step: "02",
    title: "Land Selection",
    description: "We identify and present suitable farmland options based on your criteria."
  },
  {
    step: "03",
    title: "Documentation",
    description: "Complete legal processing and transfer of land ownership to your name."
  },
  {
    step: "04",
    title: "Farm Setup",
    description: "Land preparation, crop planning, and farming operations commence."
  },
  {
    step: "05",
    title: "Management",
    description: "Ongoing farm management with regular updates and harvest coordination."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-primary text-primary">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Complete Farmland
              <span className="block text-primary">Investment Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From land acquisition to harvest sales, we provide end-to-end services 
              to maximize your agricultural investment returns.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Comprehensive Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every aspect of farmland investment handled by our expert team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 bg-card border border-border group">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-border pt-4">
                  <Badge variant="secondary" className="text-sm font-semibold">
                    {service.price}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-earth text-earth">
              Investment Packages
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Choose Your Investment Level
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured packages designed to match different investment capacities and goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`p-8 text-center relative hover:shadow-xl transition-all duration-300 bg-card border ${
                pkg.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
              }`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {pkg.name}
                </h3>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <div className="text-muted-foreground text-sm">{pkg.duration}</div>
                </div>
                
                <p className="text-muted-foreground mb-8">
                  {pkg.description}
                </p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                  }`}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A streamlined approach to get you from investment to harvest.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-8 mb-12 last:mb-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;