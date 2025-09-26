import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const LeadForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    budgetRange: "",
    joinTour: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Welcome to Tropica Farm!",
      description: "Your spot has been reserved. We'll contact you soon with exclusive updates.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      budgetRange: "",
      joinTour: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="waitlist-form" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-primary text-primary">
              Join the Exclusive List
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Reserve Your Spot
            </h2>
            <p className="text-xl text-muted-foreground">
              Be among the first to secure premium farmland with Tropica Farm.
            </p>
          </div>
          
          <Card className="p-8 bg-card border border-border shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName" className="text-sm font-semibold text-card-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="mt-2"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-card-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="mt-2"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-card-foreground">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="mt-2"
                    placeholder="+234 800 000 0000"
                  />
                </div>
                
                <div>
                  <Label htmlFor="location" className="text-sm font-semibold text-card-foreground">
                    Location
                  </Label>
                  <Input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="mt-2"
                    placeholder="City, State"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="budgetRange" className="text-sm font-semibold text-card-foreground">
                  Budget Range
                </Label>
                <Select onValueChange={(value) => handleInputChange("budgetRange", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500k-1m">₦500K - ₦1M</SelectItem>
                    <SelectItem value="1m-3m">₦1M - ₦3M</SelectItem>
                    <SelectItem value="3m-5m">₦3M - ₦5M</SelectItem>
                    <SelectItem value="5m-10m">₦5M - ₦10M</SelectItem>
                    <SelectItem value="10m+">₦10M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="joinTour"
                  checked={formData.joinTour}
                  onChange={(e) => handleInputChange("joinTour", e.target.checked)}
                  className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <Label htmlFor="joinTour" className="text-sm text-card-foreground">
                  Yes, I want to join the first farm tour
                </Label>
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Reserve My Spot
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to receive updates about Tropica Farm opportunities. 
                Your information is secure and will never be shared.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};