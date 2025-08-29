import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Brain, Target, Clock } from 'lucide-react';

interface HabitFormProps {
  onSave: (habit: { name: string; description: string; timeOfDay: string }) => void;
  onCancel: () => void;
}

const timeOptions = [
  { value: 'morning', label: '🌅 Morning (6-10 AM)', description: 'Start your day with purpose' },
  { value: 'afternoon', label: '☀️ Afternoon (12-4 PM)', description: 'Midday energy boost' },
  { value: 'evening', label: '🌅 Evening (6-9 PM)', description: 'Wind down routine' },
  { value: 'anytime', label: '🕐 Anytime', description: 'Flexible timing' },
];

const habitSuggestions = [
  'Meditate for 5 minutes',
  'Read 10 pages',
  'Write in journal',
  'Exercise for 15 minutes',
  'Practice gratitude',
  'Learn something new',
  'Call a friend or family member',
  'Drink 8 glasses of water',
];

export default function HabitForm({ onSave, onCancel }: HabitFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('anytime');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    
    onSave({
      name: name.trim(),
      description: description.trim(),
      timeOfDay,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 sm:w-20 sm:h-20">
            <Brain className="w-8 h-8 text-primary sm:w-10 sm:h-10" />
          </div>
          <CardTitle className="text-2xl font-bold text-gradient sm:text-3xl lg:text-4xl">
            Choose Your Focus Habit
          </CardTitle>
          <p className="text-base text-muted-foreground mt-3 sm:text-lg">
            Select one habit to rewire your brain. You can change it anytime.
          </p>
        </CardHeader>
        
        <CardContent className="space-y-8 p-4 sm:p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Habit Name */}
            <div className="space-y-3">
              <Label htmlFor="habit-name" className="flex items-center text-base font-medium">
                <Target className="w-4 h-4 mr-2" />
                What habit do you want to build?
              </Label>
                <Input
                id="habit-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Meditate for 5 minutes"
                className="h-14 text-base min-h-[56px]"
                required
              />
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-4">
              <Label className="text-base font-medium text-muted-foreground">
                Popular suggestions:
              </Label>
              <div className="grid gap-3 sm:grid-cols-2">
                {habitSuggestions.map((suggestion) => (
                  <Button
                    key={suggestion}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setName(suggestion)}
                    className="justify-start text-left h-auto py-3 px-4 text-base min-h-[52px] sm:text-sm"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>

            {/* Time of Day */}
            <div className="space-y-4">
              <Label className="flex items-center text-base font-medium">
                <Clock className="w-4 h-4 mr-2" />
                When will you do this?
              </Label>
              <div className="grid gap-4">
                {timeOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`
                      flex items-center space-x-4 p-4 rounded-lg border cursor-pointer transition-all
                      ${timeOfDay === option.value 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border bg-transparent hover:bg-muted/50'
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="timeOfDay"
                      value={option.value}
                      checked={timeOfDay === option.value}
                      onChange={(e) => setTimeOfDay(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex-1">
                      <div className="font-medium text-base">{option.label}</div>
                      <div className="text-sm text-muted-foreground mt-1">{option.description}</div>
                    </div>
                    <div className={`
                      w-5 h-5 rounded-full border-2 
                      ${timeOfDay === option.value 
                        ? 'border-primary bg-primary' 
                        : 'border-muted-foreground'
                      }
                    `}>
                      {timeOfDay === option.value && (
                        <div className="w-full h-full rounded-full bg-primary-foreground transform scale-50" />
                      )}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Description (Optional) */}
            <div className="space-y-3">
              <Label htmlFor="habit-description" className="text-base font-medium text-muted-foreground">
                Why is this important to you? (Optional)
              </Label>
              <Textarea
                id="habit-description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="This habit will help me..."
                className="min-h-[100px] text-base"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className="flex-1 min-h-[56px] text-lg font-semibold"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={!name.trim()}
                className="flex-1 bg-primary hover:bg-primary/90 min-h-[56px] text-lg font-semibold"
              >
                Start Rewiring
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}