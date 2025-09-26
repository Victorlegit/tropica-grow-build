import { HeroSection } from "@/components/ui/hero-section";
import { FeatureSection } from "@/components/ui/feature-section";
import { DifferenceSection } from "@/components/ui/difference-section";
import { AudienceSection } from "@/components/ui/audience-section";
import { AdvantagesSection } from "@/components/ui/advantages-section";
import { PossibilitiesSection } from "@/components/ui/possibilities-section";
import { HowItWorksSection } from "@/components/ui/how-it-works";
import { AdditionalBenefitsSection } from "@/components/ui/additional-benefits";
import { CTASection } from "@/components/ui/cta-section";
import { LeadForm } from "@/components/ui/lead-form";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('waitlist-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onJoinWaitlist={scrollToForm} />
      <FeatureSection />
      <DifferenceSection />
      <AudienceSection />
      <AdvantagesSection />
      <PossibilitiesSection />
      <HowItWorksSection />
      <AdditionalBenefitsSection />
      <CTASection onJoinWaitlist={scrollToForm} />
      <LeadForm />
    </main>
  );
};

export default Index;
