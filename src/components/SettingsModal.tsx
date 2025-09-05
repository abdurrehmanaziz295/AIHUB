import React, { useState } from 'react';
import { X, Save } from 'lucide-react';

interface SettingsModalProps {
  apiKey: string;
  onSave: (apiKey: string) => void;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  apiKey,
  onSave,
  onClose,
}) => {
  const [newApiKey, setNewApiKey] = useState(apiKey);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(newApiKey);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 rounded-lg max-w-md w-full border border-gray-800">
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Gemini API Key
            </label>
            <input
              type="password"
              value={newApiKey}
              onChange={(e) => setNewApiKey(e.target.value)}
              placeholder="Enter your Gemini API key..."
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-amber-500 focus:border-transparent focus:bg-gray-700 transition"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Your API key is stored locally in your browser.
            </p>
          </div>

          <div className="bg-blue-900/50 border border-blue-500/20 rounded-lg p-4 mb-6">
            <h4 className="font-medium text-blue-300 mb-2">How to get your API key:</h4>
            <ol className="text-sm text-blue-400 space-y-1 list-decimal list-inside">
              <li>Visit <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">Google AI Studio</a></li>
              <li>Sign in with your Google account</li>
              <li>Click "Create API Key"</li>
              <li>Copy and paste the key here</li>
            </ol>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
