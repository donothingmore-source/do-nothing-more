import { Link } from "react-router-dom";
import { Leaf, TrendingUp, Clock, Brain, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const advantages = [
  {
    icon: Clock,
    title: "Time, Not Timing",
    description: "Stop guessing when to buy or sell. Stay invested and let compounding do the work.",
  },
  {
    icon: Brain,
    title: "Peace of Mind",
    description: "No alerts. No red numbers. Just a calm view of your long-term progress.",
  },
  {
    icon: TrendingUp,
    title: "Better Returns",
    description: "Studies show: investors who trade less, earn more. We help you do less.",
  },
  {
    icon: Shield,
    title: "Emotion-Proof",
    description: "Built to protect you from panic selling and FOMO buying.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-zen-gradient">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zen-sage-light">
            <Leaf className="h-5 w-5 text-zen-sage" />
          </div>
          <span className="font-serif text-xl font-medium text-foreground">Do Nothing More</span>
        </div>

        <Link to="/auth">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Sign In
          </Button>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-6 pt-16 pb-24 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zen-sage-light text-zen-sage text-sm font-medium mb-8 animate-fade-in-up">
          <span className="h-2 w-2 rounded-full bg-zen-sage animate-breathe" />
          The anti-trading app
        </div>

        <h1 className="font-serif text-5xl md:text-7xl text-foreground mb-6 leading-tight animate-fade-in-up">
          Wealth grows when
          <br />
          <span className="text-zen-sage">you do nothing</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          Most investors lose money by trading too much. 
          Do Nothing More helps you resist the urge—and build real wealth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <Link to="/auth">
            <Button size="lg" className="bg-zen-sage hover:bg-zen-sage/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-zen-lg transition-all duration-300 hover:shadow-zen">
              Start Doing Nothing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground">Free forever • No credit card</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-12 border-y border-border/30 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">The data is clear</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in-up">
              <p className="font-serif text-4xl text-zen-sage mb-2">94%</p>
              <p className="text-sm text-muted-foreground">of active traders underperform the market</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              <p className="font-serif text-4xl text-zen-gold-warm mb-2">7.2%</p>
              <p className="text-sm text-muted-foreground">extra annual returns for patient investors</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <p className="font-serif text-4xl text-foreground mb-2">$0</p>
              <p className="text-sm text-muted-foreground">saved on trading fees when you don't trade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Designed for patience
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every feature helps you resist the urge to tinker with your investments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-zen-lg hover:border-zen-sage/20 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zen-sage-light mb-5 group-hover:bg-zen-sage/20 transition-colors duration-300">
                <advantage.icon className="h-6 w-6 text-zen-sage" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 py-20 bg-zen-sage-light/30">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-6">
            "The stock market is a device for transferring money from the impatient to the patient."
          </blockquote>
          <cite className="text-muted-foreground not-italic">— Warren Buffett</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <Leaf className="h-12 w-12 text-zen-sage mx-auto mb-6 animate-float" />
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Ready to do nothing?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Join thousands of investors who've discovered the power of patience.
        </p>
        <Link to="/auth">
          <Button size="lg" className="bg-zen-sage hover:bg-zen-sage/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-zen-lg">
            Get Started Free
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-border/30 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 Do Nothing More • Doing nothing is doing something
        </p>
      </footer>
    </div>
  );
};
