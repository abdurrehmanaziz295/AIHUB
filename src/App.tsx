import React, { useState, useEffect } from 'react';
import { Settings, Bot, Star, Zap, Wrench } from 'lucide-react';
import { AgentCard } from './components/AgentCard';
import { AgentModal } from './components/AgentModal';
import { SettingsModal } from './components/SettingsModal';
import { agentProjects } from './data/agentProjects';
import { Agent } from './types/Agent';

function App() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  useEffect(() => {
    const savedApiKey = localStorage.getItem('gemini_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    } else {
      setShowSettings(true);
    }
  }, []);

  const filteredAgents = agentProjects.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'all': return <Bot className="w-4 h-4" />;
      case 'beginner': return <Star className="w-4 h-4" />;
      case 'intermediate': return <Wrench className="w-4 h-4" />;
      case 'advanced': return <Zap className="w-4 h-4" />;
      default: return <Bot className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold text-amber-400">60 unique AI Agent project ideas</h1>
            </div>
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Settings className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search AI agents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-black transition"
            />
          </div>
          <div className="flex gap-2 bg-gray-900 border border-gray-800 p-1 rounded-lg">
            {['all', 'beginner', 'intermediate', 'advanced'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as any)}
                className={`px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2 text-sm font-medium flex-1 ${
                  selectedCategory === category
                    ? 'bg-amber-500/10 text-amber-400'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {getCategoryIcon(category)}
                <span className="capitalize">{category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              onClick={() => setSelectedAgent(agent)}
            />
          ))}
        </div>

        {filteredAgents.length === 0 && (
          <div className="text-center py-12 col-span-full">
            <Bot className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No agents found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </div>
        )}
      </main>

      {/* Modals */}
      {selectedAgent && (
        <AgentModal
          agent={selectedAgent}
          apiKey={apiKey}
          onClose={() => setSelectedAgent(null)}
        />
      )}

      {showSettings && (
        <SettingsModal
          apiKey={apiKey}
          onSave={(newApiKey) => {
            setApiKey(newApiKey);
            localStorage.setItem('gemini_api_key', newApiKey);
            setShowSettings(false);
          }}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

export default App;
