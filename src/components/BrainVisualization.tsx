import { useEffect, useState } from 'react';

interface BrainVisualizationProps {
  streakCount: number;
  className?: string;
}

interface Neuron {
  id: number;
  x: number;
  y: number;
  active: boolean;
}

export default function BrainVisualization({ streakCount, className = "" }: BrainVisualizationProps) {
  const [neurons, setNeurons] = useState<Neuron[]>([]);

  useEffect(() => {
    // Generate neurons based on streak count
    const newNeurons: Neuron[] = [];
    const maxNeurons = Math.min(streakCount, 20); // Cap at 20 neurons

    for (let i = 0; i < maxNeurons; i++) {
      newNeurons.push({
        id: i,
        x: Math.random() * 80 + 10, // Keep within bounds
        y: Math.random() * 80 + 10,
        active: true,
      });
    }

    setNeurons(newNeurons);
  }, [streakCount]);

  return (
    <div className={`relative w-full h-64 rounded-lg bg-card/50 border border-border overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
      
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="text-primary/30">
          <defs>
            <pattern id="neural-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      {/* Neurons */}
      {neurons.map((neuron) => (
        <div
          key={neuron.id}
          className="absolute neuron-node brain-fade-in"
          style={{
            left: `${neuron.x}%`,
            top: `${neuron.y}%`,
            animationDelay: `${neuron.id * 100}ms`,
          }}
        />
      ))}

      {/* Neural Connections */}
      {neurons.map((neuron, index) => {
        const nextNeuron = neurons[index + 1];
        if (!nextNeuron) return null;

        const distance = Math.sqrt(
          Math.pow(nextNeuron.x - neuron.x, 2) + Math.pow(nextNeuron.y - neuron.y, 2)
        );

        // Only draw connection if neurons are close enough
        if (distance > 30) return null;

        return (
          <div
            key={`connection-${index}`}
            className="neuron-connection brain-fade-in"
            style={{
              left: `${neuron.x}%`,
              top: `${neuron.y}%`,
              width: `${distance}%`,
              transform: `rotate(${Math.atan2(nextNeuron.y - neuron.y, nextNeuron.x - neuron.x)}rad)`,
              transformOrigin: '0 50%',
              animationDelay: `${(index + 1) * 150}ms`,
            }}
          />
        );
      })}

      {/* Streak Counter Overlay */}
      <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2">
        <div className="text-sm text-muted-foreground">Neural Connections</div>
        <div className="text-2xl font-bold text-gradient">{streakCount}</div>
      </div>

      {/* Progress Message */}
      <div className="absolute top-4 left-4 text-sm text-muted-foreground">
        {streakCount === 0 && "Start building your neural pathways"}
        {streakCount > 0 && streakCount < 5 && "Creating new connections..."}
        {streakCount >= 5 && streakCount < 10 && "Pathways strengthening..."}
        {streakCount >= 10 && "Neural network established!"}
      </div>
    </div>
  );
}