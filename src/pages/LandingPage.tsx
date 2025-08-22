import { Brain, Zap, Target, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Single Focus Approach",
      description: "Track just ONE habit at a time for maximum success. Science shows this increases completion by 300%."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Neural Visualization",
      description: "Watch your brain literally rewire as you build streaks. Each day creates new neural pathways."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Smart Distraction Tracking",
      description: "When you miss a day, we help identify what went wrong so you can build better strategies."
    },
  ];

  const benefits = [
    "Build lasting habits 3x faster with single-focus approach",
    "Visual motivation with beautiful brain network visualization", 
    "Never wonder why you failed - track distractions intelligently",
    "Simple, science-backed method used by top performers",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-3 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
            </div>
            <span className="text-lg md:text-xl font-bold text-gradient">Rewire Brain</span>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">Login</Button>
            <Button size="sm" onClick={onGetStarted} className="px-3 md:px-4">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-3">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center px-3 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 md:mb-6">
              <Zap className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Science-backed habit formation
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Rewire your brain,{" "}
              <span className="text-gradient">one habit at a time</span>
            </h1>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              Stop trying to change everything at once. Our neural-focused approach helps you build 
              lasting habits by tracking just ONE at a time, with beautiful brain visualizations 
              that show your actual progress.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12">
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="h-12 md:h-14 px-6 md:px-8 bg-primary hover:bg-primary/90 text-base md:text-lg min-h-[48px]"
            >
              Start Rewiring for Free
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-12 md:h-14 px-6 md:px-8 text-base md:text-lg min-h-[48px]"
            >
              Watch Demo
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid gap-2 md:gap-3 max-w-2xl mx-auto mb-12 md:mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start text-left">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success mr-2 md:mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-20 px-3 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              How <span className="text-gradient">Rewire Brain</span> Works
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our unique approach is based on neuroscience research about how habits actually form in your brain.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-3">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl md:rounded-2xl p-6 md:p-12 border border-border/50">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Ready to rewire your brain?
            </h2>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8">
              Join thousands of people who've successfully built lasting habits with our focused approach.
            </p>
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="h-12 md:h-14 px-6 md:px-8 bg-primary hover:bg-primary/90 text-base md:text-lg min-h-[48px]"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Button>
            <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4">
              Free forever • No credit card required • Upgrade anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Rewire Brain. Built with science, designed for success.</p>
        </div>
      </footer>
    </div>
  );
}