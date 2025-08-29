import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X, Zap, Calendar } from 'lucide-react';
import BrainVisualization from './BrainVisualization';

interface Habit {
  id: string;
  name: string;
  streak: number;
  lastCompleted: string | null;
  isCompletedToday: boolean;
}

interface DistractionOption {
  id: string;
  label: string;
  icon: string;
}

const distractionOptions: DistractionOption[] = [
  { id: 'social-media', label: 'Social Media', icon: '📱' },
  { id: 'laziness', label: 'Laziness', icon: '😴' },
  { id: 'work-stress', label: 'Work Stress', icon: '💼' },
  { id: 'other', label: 'Other', icon: '🤔' },
];

export default function HabitTracker() {
  const [currentHabit, setCurrentHabit] = useState<Habit>({
    id: '1',
    name: 'Meditate for 5 minutes',
    streak: 7,
    lastCompleted: null,
    isCompletedToday: false,
  });

  const [showDistractionModal, setShowDistractionModal] = useState(false);

  const handleMarkDone = () => {
    setCurrentHabit(prev => ({
      ...prev,
      streak: prev.streak + 1,
      lastCompleted: new Date().toISOString(),
      isCompletedToday: true,
    }));
  };

  const handleMarkMissed = () => {
    if (currentHabit.streak > 0) {
      setShowDistractionModal(true);
    }
  };

  const handleDistraction = (distraction: DistractionOption) => {
    setCurrentHabit(prev => ({
      ...prev,
      streak: 0,
      isCompletedToday: false,
    }));
    setShowDistractionModal(false);
    // In real app, this would be logged for insights
    console.log('Distraction logged:', distraction.label);
  };

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="space-y-6">
      {/* Current Habit Card */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold sm:text-2xl">Today's Focus</CardTitle>
            <Badge variant="secondary" className="px-3 py-1.5 text-sm">
              <Zap className="w-3 h-3 mr-1" />
              Day {currentHabit.streak + 1}
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground flex items-center sm:text-base">
            <Calendar className="w-4 h-4 mr-2" />
            {today}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Habit Name */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gradient mb-3 sm:text-3xl lg:text-4xl">
              {currentHabit.name}
            </h2>
            <p className="text-base text-muted-foreground sm:text-lg">
              Your brain is ready to strengthen this pathway
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              onClick={handleMarkDone}
              disabled={currentHabit.isCompletedToday}
              className="flex-1 h-14 bg-success hover:bg-success/90 text-success-foreground text-lg font-semibold min-h-[56px]"
            >
              <Check className="w-5 h-5 mr-2" />
              {currentHabit.isCompletedToday ? 'Completed!' : 'Mark Done'}
            </Button>
            <Button
              onClick={handleMarkMissed}
              disabled={currentHabit.isCompletedToday}
              variant="outline"
              className="flex-1 h-14 border-destructive/50 text-destructive hover:bg-destructive/10 text-lg font-semibold min-h-[56px]"
            >
              <X className="w-5 h-5 mr-2" />
              Missed Today
            </Button>
          </div>

          {/* Streak Counter */}
          <div className="text-center bg-muted/50 rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2 sm:text-base">Current Streak</div>
            <div className="text-5xl font-bold text-gradient mb-2 sm:text-6xl">
              {currentHabit.streak}
            </div>
            <div className="text-base text-muted-foreground sm:text-lg">
              {currentHabit.streak === 0 && "Ready to start"}
              {currentHabit.streak === 1 && "Great start!"}
              {currentHabit.streak > 1 && currentHabit.streak < 7 && "Building momentum"}
              {currentHabit.streak >= 7 && currentHabit.streak < 21 && "Strong habit forming"}
              {currentHabit.streak >= 21 && "Neural pathway established!"}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brain Visualization */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Neural Network Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <BrainVisualization streakCount={currentHabit.streak} />
        </CardContent>
      </Card>

      {/* Distraction Modal */}
      {showDistractionModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl">What distracted you today?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {distractionOptions.map((option) => (
                <Button
                  key={option.id}
                  onClick={() => handleDistraction(option)}
                  variant="outline"
                  className="w-full justify-start h-14 text-left min-h-[56px]"
                >
                  <span className="text-lg mr-3">{option.icon}</span>
                  <span className="text-base">{option.label}</span>
                </Button>
              ))}
              <Button
                onClick={() => setShowDistractionModal(false)}
                variant="ghost"
                className="w-full mt-4 min-h-[48px]"
              >
                Cancel
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}