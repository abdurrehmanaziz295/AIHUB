import React, { useState } from 'react';
import { X, Send, Loader2, Copy, Check } from 'lucide-react';
import { Agent, AgentInput } from '../types/Agent';
import { callGeminiAPI } from '../services/geminiAPI';

interface AgentModalProps {
  agent: Agent;
  apiKey: string;
  onClose: () => void;
}

export const AgentModal: React.FC<AgentModalProps> = ({ agent, apiKey, onClose }) => {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (inputId: string, value: string) => {
    setInputs(prev => ({ ...prev, [inputId]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!apiKey) {
      alert('Please set your Gemini API key in settings first.');
      return;
    }

    setLoading(true);
    setResponse('');

    try {
      const userInputs = agent.inputs
        .map(input => `${input.label}: ${inputs[input.id] || 'Not provided'}`)
        .join('\n');

      const fullPrompt = `${agent.prompt}\n\nUser Input:\n${userInputs}`;

      const result = await callGeminiAPI(fullPrompt, apiKey);
      setResponse(result);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setResponse('Sorry, there was an error processing your request. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(response);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const renderInput = (input: AgentInput) => {
    const baseClasses = "w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-gray-700 transition";
    
    switch (input.type) {
      case 'textarea':
        return (
          <textarea
            key={input.id}
            value={inputs[input.id] || ''}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
            placeholder={input.placeholder}
            required={input.required}
            rows={4}
            className={baseClasses}
          />
        );
      case 'select':
        return (
          <select
            key={input.id}
            value={inputs[input.id] || ''}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
            required={input.required}
            className={baseClasses}
          >
            <option value="">Select an option...</option>
            {input.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        );
      case 'number':
        return (
          <input
            key={input.id}
            type="number"
            value={inputs[input.id] || ''}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
            placeholder={input.placeholder}
            required={input.required}
            className={baseClasses}
          />
        );
      default:
        return (
          <input
            key={input.id}
            type="text"
            value={inputs[input.id] || ''}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
            placeholder={input.placeholder}
            required={input.required}
            className={baseClasses}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${agent.color} flex items-center justify-center text-xl`}>
              {agent.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{agent.name}</h2>
              <p className="text-sm text-gray-400">{agent.description}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden flex">
          {/* Input Form */}
          <div className="w-1/2 p-6 border-r border-gray-800 overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              {agent.inputs.map(input => (
                <div key={input.id}>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    {input.label}
                    {input.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  {renderInput(input)}
                </div>
              ))}
              
              <button
                type="submit"
                disabled={loading || !apiKey}
                className="w-full flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Generate Response
                  </>
                )}
              </button>
              
              {!apiKey && (
                <p className="text-sm text-red-400 text-center">
                  Please set your Gemini API key in settings to use this agent.
                </p>
              )}
            </form>
          </div>

          {/* Response Area */}
          <div className="w-1/2 p-6 overflow-y-auto bg-black">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-white">AI Response</h3>
              {response && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1 text-sm text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              )}
            </div>
            
            {loading && (
              <div className="flex items-center justify-center h-full">
                <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
              </div>
            )}
            
            {response && !loading && (
              <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
                <pre className="whitespace-pre-wrap text-sm text-gray-300 font-sans leading-relaxed">
                  {response}
                </pre>
              </div>
            )}
            
            {!response && !loading && (
              <div className="text-center h-full flex flex-col items-center justify-center text-gray-500">
                <p>Fill out the form and click "Generate Response" to get started.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
