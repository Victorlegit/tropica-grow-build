import { Card } from "@/components/ui/card";

const possibilities = [
  {
    title: "Today & Tomorrow",
    description: "Imagine owning 1 acre today that produces vegetables while you plan to build a weekend home tomorrow."
  },
  {
    title: "Generational Wealth",
    description: "Imagine your child inheriting farmland that has doubled in value and still generates food income."
  },
  {
    title: "Legacy & Impact",
    description: "Imagine your name on a fertile piece of land that feeds families and funds your lifestyle."
  }
];

export const PossibilitiesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-earth/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Imagine the Possibilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your farmland investment opens doors to multiple future opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {possibilities.map((possibility, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-4 bg-card border border-border group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center text-primary-foreground font-bold text-2xl">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                  {possibility.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {possibility.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};