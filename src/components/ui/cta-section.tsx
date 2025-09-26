import { Button } from "@/components/ui/button";

interface CTASectionProps {
  onJoinWaitlist: () => void;
}

export const CTASection = ({ onJoinWaitlist }: CTASectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='6' cy='6' r='6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Farmland Ownership is the New Wealth
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
            Don't Just Invest—Secure Your Future.
          </p>
          
          <div className="space-y-6">
            <Button 
              onClick={onJoinWaitlist}
              size="lg"
              className="text-xl px-16 py-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              Join the Waitlist Now
            </Button>
            
            <div className="flex items-center justify-center space-x-8 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm font-medium">Limited Plots Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm font-medium">Priority Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm font-medium">No Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};