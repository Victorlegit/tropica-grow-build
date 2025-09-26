import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  TrendingUp,
  Leaf,
  Shield,
  Globe
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Transparency",
    description: "We believe in complete transparency in all our dealings, from land documentation to crop yield reports."
  },
  {
    icon: Heart,
    title: "Sustainability",
    description: "Our farming practices prioritize environmental sustainability and long-term soil health."
  },
  {
    icon: Users,
    title: "Community",
    description: "We build strong communities of landowners who support each other's success."
  },
  {
    icon: Shield,
    title: "Security",
    description: "Your investment is protected through proper legal documentation and active land management."
  }
];

const team = [
  {
    name: "Adebayo Johnson",
    role: "Founder & CEO",
    experience: "15+ years in Agricultural Development",
    specialty: "Land acquisition and agricultural policy"
  },
  {
    name: "Dr. Funmi Adeyemi",
    role: "Head of Agronomy",
    experience: "12+ years in Crop Science",
    specialty: "Sustainable farming and soil management"
  },
  {
    name: "Ibrahim Musa",
    role: "Operations Director",
    experience: "10+ years in Farm Management",
    specialty: "Large-scale farming operations"
  },
  {
    name: "Sarah Okafor",
    role: "Business Development",
    experience: "8+ years in Investment Relations",
    specialty: "Client relations and market analysis"
  }
];

const stats = [
  { number: "500+", label: "Acres Under Management" },
  { number: "150+", label: "Happy Landowners" },
  { number: "25+", label: "Crop Varieties" },
  { number: "85%", label: "Average Annual ROI" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-primary text-primary">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Revolutionizing Agriculture
              <span className="block text-primary">for Everyone</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tropica Farm was founded on the belief that everyone deserves access to secure, 
              profitable farmland investment. We bridge the gap between traditional farming 
              and modern investment strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <Card className="p-12 bg-card border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-card-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To democratize farmland ownership by making it accessible, profitable, and secure 
                for individuals and families across Nigeria. We empower people to build wealth 
                through sustainable agriculture while contributing to food security.
              </p>
            </Card>

            <Card className="p-12 bg-card border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-3xl font-bold text-card-foreground mb-6">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To become Nigeria's leading platform for farmland investment, creating a 
                sustainable ecosystem where landowners prosper, communities thrive, and 
                food security is strengthened for future generations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Impact in Numbers
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center bg-card border border-border hover:shadow-lg transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do at Tropica Farm.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border border-border group">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-earth/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-earth text-earth">
              Meet Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expert Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team combines decades of experience in agriculture, business, and technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 bg-card border border-border">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {member.experience}
                </p>
                <Badge variant="secondary" className="text-xs">
                  {member.specialty}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;