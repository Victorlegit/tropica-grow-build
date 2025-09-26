import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farmland.jpg";

interface HeroSectionProps {
  onJoinWaitlist: () => void;
}

export const HeroSection = ({ onJoinWaitlist }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Lush tropical farmland with fresh produce" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Farm Today,
            <span className="block text-secondary"> Build Tomorrow</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
            Tropica Farm gives you the rare opportunity to own farmland that not only appreciates in value but also earns you income through farming today.
          </p>
          
          <Button 
            onClick={onJoinWaitlist}
            size="lg"
            className="text-lg px-12 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Join the Waitlist
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground/80 animate-bounce">
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};