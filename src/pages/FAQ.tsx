import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Badge } from "@/components/ui/badge";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I start investing in farmland with Tropica Farm?",
        answer: "Simply join our waitlist to get priority access to available plots. Once you're on the list, we'll contact you with suitable land options based on your budget and preferences. You can then schedule a consultation to discuss your investment goals and visit potential sites."
      },
      {
        question: "What is the minimum investment amount?",
        answer: "Our minimum investment starts at ₦500,000 for a quarter-acre plot. However, we recommend starting with our Starter Package at ₦1,000,000 for 1-2 acres, which provides better economies of scale and higher returns on investment."
      },
      {
        question: "Do I really own the land or just lease it?",
        answer: "You own the land completely! We ensure full legal ownership with proper documentation including Certificate of Occupancy (C of O) or Governor's Consent, depending on the location. The land is registered in your name and you receive all necessary legal documents."
      }
    ]
  },
  {
    category: "Investment & Returns",
    questions: [
      {
        question: "What kind of returns can I expect?",
        answer: "Returns vary based on crop types, weather conditions, and market prices. Historically, our investors see 25-40% annual returns from crop sales, plus land appreciation of 10-15% yearly. We provide detailed ROI projections during your consultation."
      },
      {
        question: "How long before I see returns on my investment?",
        answer: "For quick-cycle crops like vegetables, you can see returns within 3-4 months. Tree crops like plantain and pineapple take 12-18 months to mature but provide higher long-term returns. We typically recommend a mixed-crop approach for steady income."
      },
      {
        question: "What happens if crops fail or yields are poor?",
        answer: "We use proven farming techniques and crop insurance to minimize risks. While we cannot guarantee yields due to natural factors, our diversified approach and expert management significantly reduce the risk of total crop failure. We also offer insurance options for additional protection."
      }
    ]
  },
  {
    category: "Land & Location",
    questions: [
      {
        question: "Where are the farmlands located?",
        answer: "Our farmlands are strategically located in fertile areas within Lagos, Ogun, and Oyo states. All locations are chosen for their agricultural potential, accessibility, and future development prospects. We provide detailed location information and arrange site visits for interested investors."
      },
      {
        question: "Can I visit my farmland anytime?",
        answer: "Absolutely! You can visit your land anytime. We also organize monthly farm tours for groups of landowners, and provide regular photo and video updates of your crops' progress. Site visits can be arranged with 24-48 hours notice."
      },
      {
        question: "What if I want to build on the land later?",
        answer: "That's one of the key advantages of Tropica Farm! All our lands are selected with future development potential in mind. You can transition from farming to building residential, commercial, or agro-processing facilities. We provide guidance on the conversion process."
      }
    ]
  },
  {
    category: "Management & Operations",
    questions: [
      {
        question: "Do I need to be involved in day-to-day farming?",
        answer: "Not at all! Our professional farm management service handles everything from planting to harvest. You'll receive regular updates and reports, but your involvement is optional. Some landowners prefer to be hands-on, while others remain completely passive investors."
      },
      {
        question: "How do you ensure my produce gets sold?",
        answer: "We have established partnerships with reliable off-takers including Tropica Afrikana, restaurants, food markets, and export companies. We negotiate the best prices for your produce and handle all logistics. Market linkage is guaranteed as part of our service."
      },
      {
        question: "What crops do you recommend?",
        answer: "We recommend a diversified approach combining quick-cycle crops (tomatoes, peppers, leafy vegetables) for immediate returns and longer-cycle crops (plantain, pineapple, cassava) for sustained income. Our agronomists assess your soil and provide customized crop recommendations."
      }
    ]
  },
  {
    category: "Legal & Security",
    questions: [
      {
        question: "How secure is my investment?",
        answer: "Very secure! We conduct thorough due diligence on all lands, ensure proper legal documentation, and provide ongoing security monitoring. Our lands are in established agricultural communities with good security infrastructure."
      },
      {
        question: "What legal documents will I receive?",
        answer: "You'll receive complete documentation including Survey Plan, Deed of Assignment, Certificate of Occupancy (where applicable), Soil Test Reports, and Farm Management Agreement. All documents are prepared by qualified legal practitioners."
      },
      {
        question: "Can I sell my farmland later?",
        answer: "Yes, you have full rights to sell, lease, or transfer your land. We can also assist with resale through our network of potential buyers. Many of our landowners see significant appreciation in land value over time, making resale profitable."
      }
    ]
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="text-lg px-6 py-2 mb-6 border-primary text-primary">
              Got Questions?
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Frequently Asked
              <span className="block text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about farmland investment with Tropica Farm. 
              Can't find what you're looking for? Contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-8 border-b border-border pb-4">
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem 
                      key={questionIndex} 
                      value={`${categoryIndex}-${questionIndex}`}
                      className="border border-border rounded-lg px-6 bg-card hover:shadow-md transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-card-foreground hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pt-4 pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our team is here to help! Reach out to us for personalized answers about your farmland investment journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@tropicafarm.com" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                Email Us
              </a>
              <a 
                href="tel:+2348001234567" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 rounded-lg font-semibold transition-colors inline-block"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;