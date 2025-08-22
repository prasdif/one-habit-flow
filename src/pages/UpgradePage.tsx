import { Check, Crown, Brain, ArrowLeft, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface UpgradePageProps {
  onBack: () => void;
}

const freeFeatures = [
  "Track 1 habit at a time",
  "Basic streak counter",
  "Neural visualization",
  "Distraction tracking",
  "Mobile responsive",
];

const proFeatures = [
  "Unlimited habit switching",
  "Advanced neural analytics", 
  "Habit history & insights",
  "Custom neural themes",
  "Progress export",
  "Priority email support",
  "Habit coaching tips",
  "Advanced streak insights",
];

export default function UpgradePage({ onBack }: UpgradePageProps) {
  const handleUpgradeClick = () => {
    // In real implementation, this would integrate with Stripe
    // For now, open in new tab to avoid losing state
    console.log('Upgrade to Pro clicked - would integrate with Stripe');
    alert('Stripe integration would be implemented here with Supabase backend');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">Rewire Brain Pro</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-warning/10 rounded-full text-sm font-medium text-warning mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Unlock Your Brain's Full Potential
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Supercharge Your{" "}
            <span className="text-gradient">Neural Rewiring</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get advanced analytics, unlimited habit switching, and deep insights 
            into your brain's transformation journey.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Free Plan */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-muted-foreground" />
              </div>
              <CardTitle className="text-2xl">Free Plan</CardTitle>
              <div className="text-3xl font-bold mt-2">$0</div>
              <p className="text-muted-foreground">Perfect for getting started</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {freeFeatures.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full h-12 mt-6" disabled>
                Current Plan
              </Button>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-warning/5 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-warning to-primary text-warning-foreground px-4 py-1 text-sm font-medium">
              Most Popular
            </div>
            <CardHeader className="text-center pb-4 pt-8">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-gradient">Pro Plan</CardTitle>
              <div className="text-3xl font-bold mt-2">
                $5<span className="text-base text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground">Unlock your brain's potential</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Badge variant="secondary" className="w-full py-2 justify-center mb-4 bg-success/10 text-success border-success/20">
                <Zap className="w-4 h-4 mr-2" />
                Everything in Free, plus:
              </Badge>
              <div className="space-y-3">
                {proFeatures.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                onClick={handleUpgradeClick}
                className="w-full h-12 mt-6 bg-primary hover:bg-primary/90 text-lg font-medium"
              >
                <Crown className="w-5 h-5 mr-2" />
                Upgrade to Pro
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Cancel anytime • 30-day money-back guarantee
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Upgrade to <span className="text-gradient">Pro</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="font-semibold mb-2">Advanced Neural Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Deep insights into your habit patterns and brain rewiring progress
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="font-semibold mb-2">Unlimited Flexibility</h3>
              <p className="text-sm text-muted-foreground">
                Switch between habits as often as you need without limitations
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold mb-2">Export & Share</h3>
              <p className="text-sm text-muted-foreground">
                Download your progress and share achievements with others
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}