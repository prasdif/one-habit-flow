import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Plus, Crown, Brain, LogOut } from 'lucide-react';
import HabitTracker from '@/components/HabitTracker';
import HabitForm from '@/components/HabitForm';

interface DashboardProps {
  onUpgrade: () => void;
  onLogout: () => void;
}

export default function Dashboard({ onUpgrade, onLogout }: DashboardProps) {
  const [currentView, setCurrentView] = useState<'tracker' | 'form'>('tracker');
  const [hasHabit, setHasHabit] = useState(true);

  const handleSaveHabit = (habit: { name: string; description: string; timeOfDay: string }) => {
    // In real app, this would save to database
    console.log('Saving habit:', habit);
    setHasHabit(true);
    setCurrentView('tracker');
  };

  const handleEditHabit = () => {
    setCurrentView('form');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-gradient">Rewire Brain</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={onUpgrade}
                className="bg-gradient-to-r from-warning/10 to-warning/20 border-warning/30 text-warning hover:bg-warning/10"
              >
                <Crown className="w-4 h-4 mr-2" />
                Upgrade to Pro
              </Button>
              <Button variant="ghost" size="sm" onClick={handleEditHabit}>
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {currentView === 'tracker' && hasHabit && (
          <div className="space-y-8">
            {/* Welcome Message */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gradient mb-2">
                Welcome back, Brain Rewirer!
              </h1>
              <p className="text-muted-foreground">
                Your focused journey to lasting change continues today.
              </p>
            </div>

            {/* Habit Tracker */}
            <HabitTracker />

            {/* Quick Actions */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4">
                <Button 
                  onClick={handleEditHabit}
                  variant="outline" 
                  className="flex-1"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Change Habit
                </Button>
                <Button 
                  onClick={onUpgrade}
                  variant="outline"
                  className="flex-1 bg-gradient-to-r from-warning/10 to-warning/20 border-warning/30 text-warning hover:bg-warning/10"
                >
                  <Crown className="w-4 h-4 mr-2" />
                  View Pro Features
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {currentView === 'form' && (
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gradient mb-2">
                {hasHabit ? 'Change Your Focus' : 'Choose Your First Habit'}
              </h1>
              <p className="text-muted-foreground">
                {hasHabit 
                  ? 'Ready to rewire a different neural pathway?' 
                  : 'Select one habit to start your brain transformation.'
                }
              </p>
            </div>

            <HabitForm 
              onSave={handleSaveHabit}
              onCancel={() => setCurrentView('tracker')}
            />
          </div>
        )}

        {!hasHabit && currentView === 'tracker' && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto space-y-6">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gradient">
                Ready to Start Rewiring?
              </h2>
              <p className="text-muted-foreground">
                Choose your first habit to begin building new neural pathways.
              </p>
              <Button 
                onClick={() => setCurrentView('form')}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Your First Habit
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}