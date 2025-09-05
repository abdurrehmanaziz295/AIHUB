export interface Agent {
  id: string;
  name: string;
  description: string;
  category: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
  color: string;
  features: string[];
  prompt: string;
  inputs: AgentInput[];
}

export interface AgentInput {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'select' | 'file';
  placeholder?: string;
  options?: string[];
  required?: boolean;
}
