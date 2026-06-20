'use client';

import { useState, useEffect } from 'react';
import { generateInsights, type BusinessInsight } from '@/lib/aurora-data';
import { Button } from '@/components/ui/button';
import { Sparkles, ChevronRight } from 'lucide-react';

export function AIAssistant() {
  const [insights, setInsights] = useState<BusinessInsight[]>([]);
  const [currentInsight, setCurrentInsight] = useState<BusinessInsight | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadInsights() {
      try {
        const data = await generateInsights();
        if (data && data.length > 0) {
          setInsights(data);
          setCurrentInsight(data[0]);
        }
      } catch (error) {
        console.error('Failed to fetch insights:', error);
      } finally {
        setLoading(false);
      }
    }

    loadInsights();
  }, []);

  const handleNextInsight = () => {
    if (!currentInsight) return;
    const currentIndex = insights.findIndex((i) => i.message === currentInsight.message);
    const nextIndex = (currentIndex + 1) % insights.length;
    setCurrentInsight(insights[nextIndex]);
  };

  if (loading || !currentInsight) {
    return (
      <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 border border-slate-700">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <h3 className="font-semibold text-white">AI Recommendation</h3>
        </div>
        <div className="h-32 bg-slate-700 rounded-lg animate-pulse" />
      </div>
    );
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/10 border-red-500/20 text-red-400';
      case 'medium':
        return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400';
      case 'low':
        return 'bg-green-500/10 border-green-500/20 text-green-400';
      default:
        return 'bg-blue-500/10 border-blue-500/20 text-blue-400';
    }
  };

  return (
    <div className="rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 border border-slate-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <h3 className="font-semibold text-white">AI Recommendation</h3>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm border ${getPriorityColor(
            currentInsight.priority
          )}`}
        >
          {currentInsight.priority.charAt(0).toUpperCase() + currentInsight.priority.slice(1)} Priority
        </span>
      </div>

      <p className="text-slate-300 mb-6 leading-relaxed">{currentInsight.message}</p>

      <div className="flex gap-3">
        <Button
          variant="default"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          {currentInsight.action || 'Take Action'}
        </Button>
        <Button
          variant="outline"
          className="border-slate-600 text-slate-300 hover:bg-slate-700"
          onClick={handleNextInsight}
        >
          Next <ChevronRight className="w-4 h-4 ml-2" />
        </Button>
      </div>

      {insights.length > 1 && (
        <div className="mt-4 flex gap-1">
          {insights.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full ${
                insights.indexOf(currentInsight) === index
                  ? 'bg-blue-500'
                  : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
