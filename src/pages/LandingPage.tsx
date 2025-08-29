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
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient sm:text-2xl">Rewire Brain</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="hidden sm:flex px-4 py-2">Login</Button>
            <Button size="sm" onClick={onGetStarted} className="px-4 py-2 min-h-[44px]">Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:py-20 lg:py-24">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6 sm:mb-8 animate-bounce-gentle">
              <Zap className="w-4 h-4 mr-2 animate-pulse" />
              Science-backed habit formation
            </div>
            <h1 className="text-4xl font-bold mb-6 leading-tight sm:text-5xl md:text-6xl lg:text-7xl animate-slide-up">
              Rewire your brain,{" "}
              <span className="text-gradient animate-neural-glow">one habit at a time</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed sm:text-xl animate-fade-in-delayed">
              Stop trying to change everything at once. Our neural-focused approach helps you build 
              lasting habits by tracking just ONE at a time, with beautiful brain visualizations 
              that show your actual progress.
            </p>
          </div>

          <div className="flex flex-col gap-4 justify-center mb-12 sm:flex-row sm:gap-6 animate-fade-in-delayed" style={{animationDelay: '0.3s'}}>
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="h-14 px-8 bg-primary hover:bg-primary/90 text-lg font-semibold min-h-[56px] sm:h-16 sm:px-10 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Start Rewiring for Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-14 px-8 text-lg font-semibold min-h-[56px] sm:h-16 sm:px-10 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid gap-2 md:gap-3 max-w-2xl mx-auto mb-12 md:mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start text-left animate-slide-up hover:translate-x-2 transition-transform duration-300"
                style={{animationDelay: `${0.1 * index + 0.5}s`}}
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success mr-2 md:mr-3 flex-shrink-0 mt-0.5 animate-bounce-gentle" />
                <span className="text-sm md:text-base text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-muted/20 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl lg:text-5xl">
              How <span className="text-gradient animate-neural-glow">Rewire Brain</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto sm:text-xl animate-fade-in-delayed">
              Our unique approach is based on neuroscience research about how habits actually form in your brain.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 animate-slide-up group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-6 text-center sm:p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary animate-float group-hover:animate-bounce-gentle group-hover:bg-primary/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 sm:text-2xl group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-base text-muted-foreground sm:text-lg group-hover:text-foreground transition-colors duration-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-3">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl md:rounded-2xl p-6 md:p-12 border border-border/50 animate-slide-up hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 animate-bounce-gentle">
              Ready to rewire your brain?
            </h2>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 animate-fade-in-delayed">
              Join thousands of people who've successfully built lasting habits with our focused approach.
            </p>
            <Button 
              size="lg" 
              onClick={onGetStarted}
              className="h-12 md:h-14 px-6 md:px-8 bg-primary hover:bg-primary/90 text-base md:text-lg min-h-[48px] hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 animate-neural-glow"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
            <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 animate-fade-in-delayed" style={{animationDelay: '0.5s'}}>
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