import React from 'react';
import { Agent } from '../types/Agent';
import { Star, Wrench, Zap } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
  onClick: () => void;
}

export const AgentCard: React.FC<AgentCardProps> = ({ agent, onClick }) => {
  const getCategoryIcon = () => {
    switch (agent.category) {
      case 'beginner': return <Star className="w-4 h-4" />;
      case 'intermediate': return <Wrench className="w-4 h-4" />;
      case 'advanced': return <Zap className="w-4 h-4" />;
    }
  };

  const getCategoryColor = () => {
    switch (agent.category) {
      case 'beginner': return 'bg-green-900/50 text-green-300 border-green-500/20';
      case 'intermediate': return 'bg-yellow-900/50 text-yellow-300 border-yellow-500/20';
      case 'advanced': return 'bg-red-900/50 text-red-300 border-red-500/20';
    }
  };

  return (
    <div
      onClick={onClick}
      className="bg-gray-900/50 rounded-lg border border-gray-800 p-6 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${agent.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
          {agent.icon}
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getCategoryColor()}`}>
          {getCategoryIcon()}
          <span className="capitalize">{agent.category}</span>
        </div>
      </div>

      <h3 className="font-semibold text-white mb-2 group-hover:text-amber-400 transition-colors">
        {agent.name}
      </h3>
      
      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
        {agent.description}
      </p>

      <div className="flex flex-wrap gap-1">
        {agent.features.slice(0, 3).map((feature, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md"
          >
            {feature}
          </span>
        ))}
        {agent.features.length > 3 && (
          <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md">
            +{agent.features.length - 3} more
          </span>
        )}
      </div>
    </div>
  );
};
