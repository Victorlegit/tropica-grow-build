import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Send
} from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().min(1, { message: "Phone number is required" }).max(20, { message: "Phone must be less than 20 characters" }),
  subject: z.string().trim().min(1, { message: "Subject is required" }).max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" })
});

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    details: [
      "123 Agricultural Drive",
      "Victoria Island, Lagos",
      "Nigeria"
    ]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+234 800 TROPICA",
      "+234 901 234 5678",
      "Mon - Fri: 8AM - 6PM"
    ]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "hello@tropicafarm.com",
      "support@tropicafarm.com",
      "investor@tropicafarm.com"
    ]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 8AM - 6PM",
      "Saturday: 9AM - 4PM",
      "Sunday: Closed"
    ]
  }
];

const officeLocations = [
  {
    city: "Lagos (Head Office)",
    address: "123 Agricultural Drive, Victoria Island",
    phone: "+234 901 234 5678",
    email: "lagos@tropicafarm.com"
  },
  {
    city: "Ibadan",
    address: "45 Farming Estate, Bodija",
    phone: "+234 902 345 6789",
    email: "ibadan@tropicafarm.com"
  },
  {
    city: "Abeokuta",
    address: "78 Agricultural Zone, Oke-Mosan",
    phone: "+234 903 456 7890",
    email: "abeokuta@tropicafarm.com"
  }
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      contactSchema.parse(formData);
      
      // Here you would typically send the data to your backend
      // For now, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting Tropica Farm. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-primary text-primary">
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact
              <span className="block text-primary">Tropica Farm</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to start your farmland investment journey? Have questions about our services? 
              We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-all duration-300 bg-card border border-border group">
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <info.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 bg-card border border-border shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-card-foreground mb-4">
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-semibold text-card-foreground">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`mt-2 ${errors.name ? 'border-destructive' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-2">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-semibold text-card-foreground">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`mt-2 ${errors.email ? 'border-destructive' : ''}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-2">{errors.email}</p>
                    )}
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
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`mt-2 ${errors.phone ? 'border-destructive' : ''}`}
                      placeholder="+234 800 000 0000"
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-2">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-sm font-semibold text-card-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className={`mt-2 ${errors.subject ? 'border-destructive' : ''}`}
                      placeholder="What is this about?"
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-2">{errors.subject}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-card-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`mt-2 min-h-[120px] ${errors.message ? 'border-destructive' : ''}`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-2">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Office Locations */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Locations
                </h2>
                <p className="text-muted-foreground mb-8">
                  Visit us at any of our offices across Nigeria.
                </p>
              </div>

              {officeLocations.map((location, index) => (
                <Card key={index} className="p-6 bg-card border border-border hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {location.city}
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span>{location.email}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;