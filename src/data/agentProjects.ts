import { Agent } from '../types/Agent';

export const agentProjects: Agent[] = [
  // BEGINNER AGENTS
  {
    id: 'ai-resume-optimizer',
    name: 'AI Resume Optimizer',
    description: 'Optimize your resume for specific job roles and ATS systems',
    category: 'beginner',
    icon: '📄',
    color: 'from-blue-500 to-blue-600',
    features: ['ATS Optimization', 'Keyword Analysis', 'Format Suggestions', 'Industry-specific tips'],
    prompt: 'You are an expert resume optimizer. Analyze the provided resume and job description, then provide specific recommendations to improve the resume for better ATS compatibility and job matching. Focus on keywords, formatting, and content optimization.',
    inputs: [
      { id: 'resume', label: 'Resume Content', type: 'textarea', placeholder: 'Paste your resume text here...', required: true },
      { id: 'job_description', label: 'Job Description', type: 'textarea', placeholder: 'Paste the job description here...', required: true },
    ]
  },
  {
    id: 'portfolio-builder',
    name: 'Portfolio Builder',
    description: 'Get personalized advice for building an impressive portfolio',
    category: 'beginner',
    icon: '🎨',
    color: 'from-purple-500 to-purple-600',
    features: ['Project Ideas', 'Layout Suggestions', 'Content Strategy', 'Platform Recommendations'],
    prompt: 'You are a portfolio consultant helping professionals create compelling portfolios. Provide specific advice on project selection, presentation, and platform choice based on their field and goals.',
    inputs: [
      { id: 'profession', label: 'Your Profession', type: 'text', placeholder: 'e.g., Web Developer, Graphic Designer', required: true },
      { id: 'goals', label: 'Portfolio Goals', type: 'textarea', placeholder: 'What do you want to achieve with your portfolio?', required: true }
    ]
  },
  {
    id: 'interview-coach',
    name: 'Interview Coach',
    description: 'Practice and prepare for job interviews with AI coaching',
    category: 'beginner',
    icon: '🎙️',
    color: 'from-green-500 to-green-600',
    features: ['Mock Interviews', 'Behavioral Questions', 'Feedback', 'Confidence Building'],
    prompt: 'You are an expert interview coach. Help the user prepare for an upcoming job interview by asking relevant questions, providing feedback on their answers, and offering tips for success.',
    inputs: [
      { id: 'job_role', label: 'Job Role', type: 'text', placeholder: 'e.g., Software Engineer, Project Manager', required: true },
      { id: 'job_description', label: 'Job Description', type: 'textarea', placeholder: 'Paste the job description for context...', required: true },
      { id: 'user_answer', label: 'Practice Answer', type: 'textarea', placeholder: 'Answer a practice question or ask for one...' }
    ]
  },
  {
    id: 'salary-negotiator',
    name: 'Salary Negotiator',
    description: 'Strategic advice for salary negotiations and career advancement',
    category: 'beginner',
    icon: '💰',
    color: 'from-yellow-500 to-yellow-600',
    features: ['Market Research', 'Negotiation Scripts', 'Value Proposition', 'Timing Advice'],
    prompt: 'You are a salary negotiation expert. Provide strategic advice on how to approach salary negotiations, including market research, talking points, and negotiation tactics based on the user\'s situation.',
    inputs: [
      { id: 'position', label: 'Job Position', type: 'text', placeholder: 'e.g., Software Engineer, Marketing Manager', required: true },
      { id: 'location', label: 'Location', type: 'text', placeholder: 'City, State/Country', required: true },
      { id: 'experience', label: 'Years of Experience', type: 'number', placeholder: '0', required: true },
    ]
  },
  {
    id: 'daily-productivity-manager',
    name: 'Daily Productivity Manager',
    description: 'Optimize your daily routine and boost productivity',
    category: 'beginner',
    icon: '⚡',
    color: 'from-red-500 to-red-600',
    features: ['Task Prioritization', 'Time Blocking', 'Energy Management', 'Habit Formation'],
    prompt: 'You are a productivity coach. Analyze the user\'s daily routine and goals, then provide a personalized productivity plan with specific strategies, time management techniques, and habit recommendations.',
    inputs: [
      { id: 'goals', label: 'Today\'s Top 3 Goals', type: 'textarea', placeholder: 'What are the most important things to accomplish?', required: true },
      { id: 'tasks', label: 'Full Task List', type: 'textarea', placeholder: 'List all other tasks for today...', required: true },
    ]
  },
  {
    id: 'email-summarizer',
    name: 'Email Summarizer',
    description: 'Quickly summarize long emails and extract action items',
    category: 'beginner',
    icon: '📧',
    color: 'from-indigo-500 to-indigo-600',
    features: ['Key Points Extraction', 'Action Items', 'Priority Assessment', 'Response Suggestions'],
    prompt: 'You are an email management assistant. Analyze the provided email and create a concise summary highlighting key points, action items, deadlines, and suggest appropriate responses or next steps.',
    inputs: [
      { id: 'email_content', label: 'Email Content', type: 'textarea', placeholder: 'Paste the email content here...', required: true },
    ]
  },
  {
    id: 'meeting-memory',
    name: 'Meeting Memory',
    description: 'Summarize meeting notes and identify key decisions',
    category: 'beginner',
    icon: '🧠',
    color: 'from-teal-500 to-teal-600',
    features: ['Summarization', 'Action Items', 'Key Decisions', 'Topic Extraction'],
    prompt: 'You are a meeting analysis expert. Analyze the provided meeting transcript or notes to create a concise summary, extract action items with owners, and highlight key decisions made.',
    inputs: [
        { id: 'meeting_notes', label: 'Meeting Notes / Transcript', type: 'textarea', placeholder: 'Paste your meeting notes or transcript here...', required: true },
    ]
  },
  {
    id: 'career-path-recommender',
    name: 'Career Path Recommender',
    description: 'Discover career opportunities based on your skills and interests',
    category: 'beginner',
    icon: '🎯',
    color: 'from-orange-500 to-orange-600',
    features: ['Skill Assessment', 'Career Matching', 'Growth Paths', 'Skill Gap Analysis'],
    prompt: 'You are a career counselor. Analyze the user\'s skills, interests, and experience to recommend suitable career paths with specific steps for transition and skill development.',
    inputs: [
      { id: 'skills', label: 'Your Skills', type: 'textarea', placeholder: 'List your key skills and competencies...', required: true },
      { id: 'interests', label: 'Interests & Passions', type: 'textarea', placeholder: 'What motivates and excites you?', required: true },
    ]
  },
  {
    id: 'learning-mentor',
    name: 'Learning Mentor',
    description: 'Personalized learning strategies and study plans',
    category: 'beginner',
    icon: '📚',
    color: 'from-pink-500 to-pink-600',
    features: ['Study Plans', 'Learning Techniques', 'Progress Tracking', 'Resource Recommendations'],
    prompt: 'You are a learning specialist. Create personalized study strategies and learning plans based on the user\'s goals, learning style, and available time. Provide specific techniques and resources.',
    inputs: [
      { id: 'subject', label: 'What are you learning?', type: 'text', placeholder: 'e.g., Python programming, Spanish, Data Science', required: true },
      { id: 'time_available', label: 'Time Available per Week', type: 'text', placeholder: 'e.g., 5 hours', required: true },
    ]
  },
  {
    id: 'networking-assistant',
    name: 'Networking Assistant',
    description: 'Build meaningful professional connections and relationships',
    category: 'beginner',
    icon: '🤝',
    color: 'from-cyan-500 to-cyan-600',
    features: ['Connection Strategies', 'Conversation Starters', 'Follow-up Templates', 'Event Preparation'],
    prompt: 'You are a networking coach. Provide strategies for building professional relationships, including conversation starters, follow-up approaches, and networking event preparation tailored to the user\'s industry and goals.',
    inputs: [
      { id: 'networking_goal', label: 'Networking Goal', type: 'textarea', placeholder: 'e.g., Find a mentor, get a job referral, meet potential clients...', required: true },
      { id: 'context', label: 'Networking Context', type: 'textarea', placeholder: 'Describe the situation (conference, LinkedIn, etc.)...', required: true }
    ]
  },
  {
    id: 'personal-task-manager',
    name: 'Personal Task Manager',
    description: 'Organize and prioritize your personal tasks effectively',
    category: 'beginner',
    icon: '✅',
    color: 'from-emerald-500 to-emerald-600',
    features: ['Task Prioritization', 'Deadline Management', 'Progress Tracking', 'Productivity Tips'],
    prompt: 'You are a personal productivity assistant. Help organize and prioritize the user\'s tasks using proven methodologies like the Eisenhower Matrix. Provide a clear action plan.',
    inputs: [
      { id: 'tasks', label: 'Your Tasks', type: 'textarea', placeholder: 'List all your current tasks and responsibilities...', required: true },
    ]
  },
  {
    id: 'smart-calendar',
    name: 'Smart Calendar',
    description: 'Optimize your schedule and time management',
    category: 'beginner',
    icon: '📅',
    color: 'from-violet-500 to-violet-600',
    features: ['Schedule Optimization', 'Time Blocking', 'Meeting Preparation', 'Energy Management'],
    prompt: 'You are a calendar optimization expert. Analyze the user\'s schedule and commitments to provide recommendations for better time management, including optimal meeting times, break scheduling, and energy-based task planning.',
    inputs: [
      { id: 'current_schedule', label: 'Current Schedule', type: 'textarea', placeholder: 'Describe your typical weekly schedule and commitments...', required: true },
      { id: 'priorities', label: 'Top Priorities', type: 'textarea', placeholder: 'What are your most important commitments?', required: true },
    ]
  },
  {
    id: 'study-planner',
    name: 'Study Planner',
    description: 'Create effective study schedules and learning strategies',
    category: 'beginner',
    icon: '📖',
    color: 'from-blue-600 to-blue-700',
    features: ['Study Schedules', 'Review Cycles', 'Exam Preparation', 'Learning Optimization'],
    prompt: 'You are a study planning expert. Create a comprehensive study plan that includes spaced repetition, active recall, and optimal review cycles based on the user\'s subjects and timeline.',
    inputs: [
      { id: 'subjects', label: 'Subjects to Study', type: 'textarea', placeholder: 'List the subjects or topics you need to study...', required: true },
      { id: 'exam_date', label: 'Exam Date', type: 'text', placeholder: 'When is your exam or deadline?', required: true },
    ]
  },
  {
    id: 'job-application-tracker',
    name: 'Job Application Tracker',
    description: 'Manage and track your job applications effectively',
    category: 'beginner',
    icon: '💼',
    color: 'from-gray-600 to-gray-700',
    features: ['Application Tracking', 'Follow-up Reminders', 'Status Management', 'Contact Info'],
    prompt: 'You are a job application assistant. Based on the job the user applied for, suggest a follow-up email draft and provide a structured way to track this application.',
    inputs: [
      { id: 'job_title', label: 'Job Title', type: 'text', placeholder: 'e.g., Software Engineer', required: true },
      { id: 'company', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
      { id: 'application_date', label: 'Date Applied', type: 'text', placeholder: 'e.g., 2025-07-20', required: true },
    ]
  },
  {
    id: 'freelancing-proposal-writer',
    name: 'Freelancing Proposal Writer',
    description: 'Craft winning freelance proposals and project bids',
    category: 'beginner',
    icon: '📝',
    color: 'from-teal-600 to-teal-700',
    features: ['Proposal Templates', 'Pricing Strategies', 'Client Research', 'Project Scoping'],
    prompt: 'You are a freelancing expert. Help create compelling proposals that win projects by understanding client needs, demonstrating value, and presenting clear project scopes and pricing.',
    inputs: [
      { id: 'project_description', label: 'Project Description', type: 'textarea', placeholder: 'Paste the client\'s project description...', required: true },
      { id: 'your_skills', label: 'Your Relevant Skills', type: 'textarea', placeholder: 'List skills relevant to this project...', required: true },
    ]
  },
  {
    id: 'work-life-balance-manager',
    name: 'Work-Life Balance Manager',
    description: 'Achieve a healthier work-life balance with personalized strategies',
    category: 'beginner',
    icon: '⚖️',
    color: 'from-red-600 to-red-700',
    features: ['Boundary Setting', 'Time Management', 'Stress Reduction', 'Activity Planning'],
    prompt: 'You are a work-life balance coach. Analyze the user\'s situation and provide actionable strategies for setting boundaries, managing time effectively, reducing stress, and integrating personal activities.',
    inputs: [
        { id: 'work_hours', label: 'Typical Work Hours', type: 'text', placeholder: 'e.g., 9am-7pm, Mon-Fri', required: true },
        { id: 'challenges', label: 'Main Challenges', type: 'textarea', placeholder: 'e.g., Can\'t switch off, too many meetings, personal time gets pushed aside', required: true },
    ]
  },
  {
    id: 'research-assistant',
    name: 'Research Assistant',
    description: 'Efficiently gather and organize research information',
    category: 'beginner',
    icon: '🔍',
    color: 'from-indigo-600 to-indigo-700',
    features: ['Source Evaluation', 'Information Organization', 'Citation Help', 'Research Strategy'],
    prompt: 'You are a research methodology expert. Help the user develop effective research strategies by suggesting keywords, identifying potential sources, and outlining a research plan.',
    inputs: [
      { id: 'research_topic', label: 'Research Topic', type: 'text', placeholder: 'What are you researching?', required: true },
      { id: 'specific_questions', label: 'Specific Questions', type: 'textarea', placeholder: 'What specific questions do you need answered?' }
    ]
  },
  {
    id: 'travel-expense-manager',
    name: 'Travel Expense Manager',
    description: 'Track and optimize travel expenses for business or personal trips',
    category: 'beginner',
    icon: '✈️',
    color: 'from-sky-500 to-sky-600',
    features: ['Expense Tracking', 'Budget Planning', 'Receipt Organization', 'Tax Deductions'],
    prompt: 'You are a travel expense management expert. Help organize travel expenses, create an expense report, and provide tips for cost optimization based on the user\'s trip details.',
    inputs: [
      { id: 'trip_details', label: 'Trip Details', type: 'textarea', placeholder: 'Destination, duration, purpose...', required: true },
      { id: 'expenses', label: 'List of Expenses', type: 'textarea', placeholder: 'List your expenses (flights, hotels, meals, etc.) with amounts...', required: true },
    ]
  },
  {
    id: 'remote-work-buddy',
    name: 'Remote Work Buddy',
    description: 'Enhance your remote work productivity and well-being',
    category: 'beginner',
    icon: '🏠',
    color: 'from-green-600 to-green-700',
    features: ['Work-Life Balance', 'Home Office Setup', 'Communication Tips', 'Productivity Hacks'],
    prompt: 'You are a remote work specialist. Provide personalized advice for improving remote work productivity, maintaining work-life balance, and creating an effective home office setup.',
    inputs: [
      { id: 'challenges', label: 'Main Challenges', type: 'textarea', placeholder: 'What difficulties are you facing with remote work?', required: true },
    ]
  },
  {
    id: 'personal-branding-assistant',
    name: 'Personal Branding Assistant',
    description: 'Develop and enhance your personal brand online',
    category: 'beginner',
    icon: '✨',
    color: 'from-emerald-600 to-emerald-700',
    features: ['Brand Statement', 'Content Strategy', 'Platform Advice', 'Audience Growth'],
    prompt: 'You are a personal branding strategist. Help the user define their personal brand and develop a content strategy for a chosen platform to build their online presence.',
    inputs: [
        { id: 'profession', label: 'Your Profession/Niche', type: 'text', placeholder: 'e.g., UX Designer, Financial Advisor', required: true },
        { id: 'platform', label: 'Target Platform', type: 'select', options: ['LinkedIn', 'Twitter/X', 'Instagram', 'Blog/Website', 'Other'], required: true },
    ]
  },

  // INTERMEDIATE AGENTS
  {
    id: 'code-reviewer',
    name: 'Code Reviewer',
    description: 'Professional code review with best practices and optimization suggestions',
    category: 'intermediate',
    icon: '👨‍💻',
    color: 'from-purple-500 to-purple-600',
    features: ['Code Quality Analysis', 'Security Review', 'Performance Optimization', 'Best Practices'],
    prompt: 'You are a senior software engineer conducting a code review. Analyze the provided code for quality, security, performance, and adherence to best practices. Provide specific, actionable feedback.',
    inputs: [
      { id: 'code', label: 'Code to Review', type: 'textarea', placeholder: 'Paste your code here...', required: true },
      { id: 'language', label: 'Programming Language', type: 'text', placeholder: 'e.g., JavaScript, Python', required: true },
    ]
  },
  {
    id: 'bug-hunter',
    name: 'Bug Hunter',
    description: 'Identify and debug issues in your code systematically',
    category: 'intermediate',
    icon: '🐛',
    color: 'from-red-500 to-red-600',
    features: ['Error Analysis', 'Debug Strategies', 'Root Cause Analysis', 'Fix Suggestions'],
    prompt: 'You are an expert debugging specialist. Analyze the provided code and error message to identify the potential root cause of the bug and suggest a fix.',
    inputs: [
      { id: 'code', label: 'Problematic Code', type: 'textarea', placeholder: 'Paste the code that has issues...', required: true },
      { id: 'error_message', label: 'Error Message', type: 'textarea', placeholder: 'Copy the exact error message...', required: true },
    ]
  },
  {
    id: 'pr-reviewer',
    name: 'PR Reviewer',
    description: 'Comprehensive pull request reviews for better code collaboration',
    category: 'intermediate',
    icon: '🔄',
    color: 'from-blue-500 to-blue-600',
    features: ['Change Analysis', 'Impact Assessment', 'Merge Conflicts', 'Collaboration Tips'],
    prompt: 'You are a senior developer reviewing a pull request. Analyze the changes and provide constructive feedback for the author. Focus on code quality, clarity, and potential issues.',
    inputs: [
      { id: 'pr_description', label: 'PR Description', type: 'textarea', placeholder: 'Describe what this PR changes...', required: true },
      { id: 'changed_code', label: 'Changed Code (Diff)', type: 'textarea', placeholder: 'Paste the main code changes...', required: true },
    ]
  },
  {
    id: 'api-tester',
    name: 'API Tester',
    description: 'Design and execute comprehensive API testing strategies',
    category: 'intermediate',
    icon: '🔌',
    color: 'from-green-500 to-green-600',
    features: ['Test Case Generation', 'Endpoint Testing', 'Performance Testing', 'Security Testing'],
    prompt: 'You are an API testing specialist. Based on the API endpoint description, generate a set of test cases to ensure its functionality, including happy path, edge cases, and error handling.',
    inputs: [
      { id: 'api_endpoint', label: 'API Endpoint and Method', type: 'text', placeholder: 'e.g., GET /api/users/{id}', required: true },
      { id: 'api_description', label: 'API Description', type: 'textarea', placeholder: 'Describe what the endpoint does, its parameters, and expected response...', required: true },
    ]
  },
  {
    id: 'code-explainer',
    name: 'Code Explainer',
    description: 'Get clear, concise explanations of complex code snippets',
    category: 'intermediate',
    icon: '💡',
    color: 'from-yellow-500 to-yellow-600',
    features: ['Line-by-line explanation', 'High-level summary', 'Logic flow', 'Language concepts'],
    prompt: 'You are an expert code explainer. Analyze the provided code snippet and explain its functionality, logic, and key concepts in a clear and easy-to-understand way.',
    inputs: [
        { id: 'code', label: 'Code to Explain', type: 'textarea', placeholder: 'Paste the code snippet here...', required: true },
        { id: 'language', label: 'Programming Language', type: 'text', placeholder: 'e.g., JavaScript, Python', required: true },
    ]
  },
  {
    id: 'code-refactorer',
    name: 'Code Refactorer',
    description: 'Improve code quality through systematic refactoring',
    category: 'intermediate',
    icon: '🔧',
    color: 'from-indigo-500 to-indigo-600',
    features: ['Code Cleanup', 'Pattern Implementation', 'Performance Improvement', 'Maintainability'],
    prompt: 'You are a refactoring expert. Analyze the provided code and suggest specific refactoring improvements to enhance readability, maintainability, and performance. Provide the refactored code.',
    inputs: [
      { id: 'code_to_refactor', label: 'Code to Refactor', type: 'textarea', placeholder: 'Paste the code that needs refactoring...', required: true },
      { id: 'language', label: 'Programming Language', type: 'text', placeholder: 'e.g., JavaScript, Python', required: true },
    ]
  },
  {
    id: 'system-design-partner',
    name: 'System Design Partner',
    description: 'Collaborate on system architecture and design decisions',
    category: 'intermediate',
    icon: '🏗️',
    color: 'from-purple-600 to-purple-700',
    features: ['Architecture Planning', 'Scalability Design', 'Technology Selection', 'Trade-off Analysis'],
    prompt: 'You are a system design expert. Help design a high-level architecture for the given system requirements, considering scalability, reliability, and trade-offs. Suggest a tech stack.',
    inputs: [
      { id: 'system_requirements', label: 'System Requirements', type: 'textarea', placeholder: 'What should the system do? e.g., A photo sharing social media app', required: true },
      { id: 'scale_expectations', label: 'Scale Expectations', type: 'text', placeholder: 'e.g., 1 million users', required: true },
    ]
  },
  {
    id: 'documentation-writer',
    name: 'Documentation Writer',
    description: 'Create comprehensive and user-friendly technical documentation',
    category: 'intermediate',
    icon: '📚',
    color: 'from-teal-500 to-teal-600',
    features: ['Technical Writing', 'API Documentation', 'User Guides', 'Code Comments'],
    prompt: 'You are a technical documentation specialist. Write a clear and concise README file for a project based on its description and code.',
    inputs: [
      { id: 'project_description', label: 'Project Description', type: 'textarea', placeholder: 'Describe the project, its purpose, and features...', required: true },
      { id: 'code_snippet', label: 'Main Code Snippet', type: 'textarea', placeholder: 'Paste a key code file (e.g., main.py, App.tsx) for context...', required: true },
    ]
  },
  {
    id: 'dsa-practice-buddy',
    name: 'DSA Practice Buddy',
    description: 'Practice Data Structures & Algorithms problems with hints',
    category: 'intermediate',
    icon: '🧠',
    color: 'from-orange-500 to-orange-600',
    features: ['Problem Generation', 'Hint System', 'Solution Analysis', 'Time Complexity'],
    prompt: 'You are a Data Structures and Algorithms tutor. Provide a practice problem related to the chosen topic and difficulty. If the user provides a solution, analyze it and give feedback.',
    inputs: [
        { id: 'topic', label: 'Topic', type: 'select', options: ['Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming', 'Sorting'], required: true },
        { id: 'difficulty', label: 'Difficulty', type: 'select', options: ['Easy', 'Medium', 'Hard'], required: true },
        { id: 'solution_attempt', label: 'Solution Attempt (Optional)', type: 'textarea', placeholder: 'Paste your solution here for feedback...' },
    ]
  },
  {
    id: 'learning-tracker',
    name: 'Learning Tracker',
    description: 'Track and optimize your learning progress in technical skills',
    category: 'intermediate',
    icon: '📈',
    color: 'from-blue-600 to-blue-700',
    features: ['Progress Tracking', 'Skill Assessment', 'Learning Paths', 'Goal Setting'],
    prompt: 'You are a learning progress specialist. Create a structured learning roadmap for a technical skill, breaking it down into key milestones from beginner to advanced.',
    inputs: [
      { id: 'learning_subject', label: 'What skill are you learning?', type: 'text', placeholder: 'e.g., React, Machine Learning, System Design', required: true },
    ]
  },
  {
    id: 'code-debugger',
    name: 'Code Debugger',
    description: 'Get step-by-step instructions to debug your code',
    category: 'intermediate',
    icon: '🐞',
    color: 'from-pink-500 to-pink-600',
    features: ['Debugging Steps', 'Hypothesis Generation', 'Logging Advice', 'Tooling Suggestions'],
    prompt: 'You are an expert code debugger. Provide a step-by-step debugging plan to help the user find the root cause of the issue described.',
    inputs: [
        { id: 'code_language', label: 'Programming Language', type: 'text', placeholder: 'e.g., JavaScript, Python', required: true },
        { id: 'problem_description', label: 'Problem Description', type: 'textarea', placeholder: 'Describe the bug, what you expect vs. what actually happens...', required: true },
        { id: 'code_snippet', label: 'Relevant Code', type: 'textarea', placeholder: 'Paste the code where you think the bug might be...', required: true },
    ]
  },
  {
    id: 'repo-summarizer',
    name: 'Repo Summarizer',
    description: 'Analyze and summarize code repositories for quick understanding',
    category: 'intermediate',
    icon: '📂',
    color: 'from-cyan-500 to-cyan-600',
    features: ['Code Analysis', 'Architecture Overview', 'Technology Stack', 'Contributing Guidelines'],
    prompt: 'You are a code repository analyst. Examine the provided file structure and key file contents to provide a high-level summary of the project, its purpose, and tech stack.',
    inputs: [
      { id: 'repo_structure', label: 'Repository File List', type: 'textarea', placeholder: 'List main directories and files...', required: true },
      { id: 'readme_content', label: 'README.md Content', type: 'textarea', placeholder: 'Paste the content of the README file...', required: true },
    ]
  },
  {
    id: 'devops-automator',
    name: 'DevOps Automator',
    description: 'Automate development and deployment workflows',
    category: 'intermediate',
    icon: '⚙️',
    color: 'from-gray-500 to-gray-600',
    features: ['CI/CD Setup', 'Deployment Automation', 'Infrastructure as Code', 'Monitoring Setup'],
    prompt: 'You are a DevOps specialist. Generate a basic CI/CD pipeline configuration file for the specified platform and project type.',
    inputs: [
      { id: 'platform', label: 'CI/CD Platform', type: 'select', options: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI'], required: true },
      { id: 'project_type', label: 'Project Type', type: 'text', placeholder: 'e.g., Node.js App, Python Flask API, React SPA', required: true },
    ]
  },
  {
    id: 'testing-assistant',
    name: 'Testing Assistant',
    description: 'Comprehensive testing strategies and test case generation',
    category: 'intermediate',
    icon: '🧪',
    color: 'from-emerald-500 to-emerald-600',
    features: ['Test Case Design', 'Testing Strategies', 'Test Automation', 'Quality Assurance'],
    prompt: 'You are a quality assurance and testing expert. Generate a list of test cases for the given feature, covering different scenarios.',
    inputs: [
      { id: 'feature_description', label: 'Feature Description', type: 'textarea', placeholder: 'Describe the feature to be tested. e.g., User login page with username and password.', required: true },
    ]
  },
  {
    id: 'cloud-cost-optimizer',
    name: 'Cloud Cost Optimizer',
    description: 'Optimize cloud infrastructure costs and resource utilization',
    category: 'intermediate',
    icon: '☁️',
    color: 'from-sky-500 to-sky-600',
    features: ['Cost Analysis', 'Resource Optimization', 'Billing Review', 'Scaling Strategies'],
    prompt: 'You are a cloud cost optimization specialist. Analyze the cloud services usage and provide actionable recommendations to reduce costs while maintaining performance.',
    inputs: [
      { id: 'cloud_provider', label: 'Cloud Provider', type: 'select', options: ['AWS', 'Google Cloud', 'Azure'], required: true },
      { id: 'current_services', label: 'Current Services & Monthly Cost', type: 'textarea', placeholder: 'e.g., EC2: $500/mo, S3: $50/mo, RDS: $300/mo', required: true },
    ]
  },
  {
    id: 'data-cleaner',
    name: 'Data Cleaner',
    description: 'Clean, validate, and prepare data for analysis and processing',
    category: 'intermediate',
    icon: '🧹',
    color: 'from-violet-500 to-violet-600',
    features: ['Data Validation', 'Cleaning Strategies', 'Format Standardization', 'Quality Assessment'],
    prompt: 'You are a data cleaning specialist. Analyze the provided data sample and suggest a script or steps to clean it.',
    inputs: [
      { id: 'data_sample', label: 'Data Sample', type: 'textarea', placeholder: 'Paste a sample of your messy data (CSV, JSON, etc.)...', required: true },
      { id: 'cleaning_goal', label: 'Cleaning Goal', type: 'textarea', placeholder: 'Describe what a "clean" version of the data should look like.', required: true },
    ]
  },
  {
    id: 'sql-query-helper',
    name: 'SQL Query Helper',
    description: 'Optimize SQL queries and solve complex database problems',
    category: 'intermediate',
    icon: '🔍',
    color: 'from-amber-500 to-amber-600',
    features: ['Query Optimization', 'Performance Tuning', 'Complex Joins', 'Index Suggestions'],
    prompt: 'You are a SQL optimization expert. Analyze the provided schema and query, then provide an optimized version of the query.',
    inputs: [
      { id: 'database_schema', label: 'Database Schema', type: 'textarea', placeholder: 'Provide CREATE TABLE statements for relevant tables...', required: true },
      { id: 'slow_query', label: 'Slow Query', type: 'textarea', placeholder: 'Paste your existing slow SQL query...', required: true },
    ]
  },
  {
    id: 'ai-project-builder',
    name: 'AI Project Builder',
    description: 'Design and plan AI/ML projects from concept to implementation',
    category: 'intermediate',
    icon: '🤖',
    color: 'from-rose-500 to-rose-600',
    features: ['Project Planning', 'Model Selection', 'Data Strategy', 'Implementation Roadmap'],
    prompt: 'You are an AI/ML project architect. Help design an AI project by suggesting an appropriate model type and data strategy for the given goal.',
    inputs: [
      { id: 'project_goal', label: 'Project Goal', type: 'textarea', placeholder: 'What do you want your AI system to do? e.g., Predict customer churn.', required: true },
      { id: 'available_data', label: 'Available Data Description', type: 'textarea', placeholder: 'What data do you have? e.g., User activity logs, subscription history.', required: true },
    ]
  },
  {
    id: 'model-evaluator',
    name: 'Model Evaluator',
    description: 'Evaluate and improve machine learning model performance',
    category: 'intermediate',
    icon: '📊',
    color: 'from-teal-600 to-teal-700',
    features: ['Performance Metrics', 'Model Comparison', 'Bias Detection', 'Improvement Strategies'],
    prompt: 'You are a machine learning model evaluation expert. Suggest the most appropriate evaluation metrics for a model and explain why.',
    inputs: [
      { id: 'model_type', label: 'Model Type', type: 'select', options: ['Classification', 'Regression', 'Clustering', 'NLP', 'Computer Vision', 'Other'], required: true },
      { id: 'business_goal', label: 'Business Goal', type: 'textarea', placeholder: 'What is the business goal of the model? e.g., Identify fraudulent transactions to minimize financial loss.', required: true },
    ]
  },
  {
    id: 'security-vulnerability-finder',
    name: 'Security Vulnerability Finder',
    description: 'Identify potential security vulnerabilities in code',
    category: 'intermediate',
    icon: '🛡️',
    color: 'from-indigo-600 to-indigo-700',
    features: ['Vulnerability Scanning', 'OWASP Top 10', 'Secure Coding', 'Fix Suggestions'],
    prompt: 'You are a security analyst. Analyze the provided code snippet for common security vulnerabilities (like SQL Injection, XSS, etc.) and suggest fixes.',
    inputs: [
        { id: 'code_snippet', label: 'Code Snippet', type: 'textarea', placeholder: 'Paste a code snippet, e.g., a database query or web handler...', required: true },
        { id: 'language_framework', label: 'Language & Framework', type: 'text', placeholder: 'e.g., Python Flask, Node.js Express', required: true },
    ]
  },

  // ADVANCED AGENTS
  {
    id: 'fitness-coach',
    name: 'Fitness Coach',
    description: 'Comprehensive fitness coaching with personalized workout and nutrition plans',
    category: 'advanced',
    icon: '💪',
    color: 'from-red-500 to-red-600',
    features: ['Custom Workouts', 'Progress Tracking', 'Nutrition Planning', 'Form Analysis'],
    prompt: 'You are a certified fitness coach. Create a detailed weekly workout plan based on the user\'s goals, experience, and available equipment.',
    inputs: [
      { id: 'fitness_goals', label: 'Fitness Goals', type: 'text', placeholder: 'e.g., Build muscle, lose weight, improve cardio', required: true },
      { id: 'experience_level', label: 'Experience Level', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'], required: true },
      { id: 'available_equipment', label: 'Available Equipment', type: 'textarea', placeholder: 'e.g., Dumbbells, pull-up bar, full gym access...', required: true },
      { id: 'days_per_week', label: 'Workout Days per Week', type: 'number', placeholder: 'e.g., 4', required: true },
    ]
  },
  {
    id: 'nutrition-planner',
    name: 'Nutrition Planner',
    description: 'Personalized nutrition planning with meal prep and dietary guidance',
    category: 'advanced',
    icon: '🥗',
    color: 'from-green-500 to-green-600',
    features: ['Meal Planning', 'Macro Tracking', 'Dietary Accommodations', 'Shopping Lists'],
    prompt: 'You are a registered dietitian. Create a sample one-day meal plan with recipes based on the user\'s dietary needs and goals.',
    inputs: [
      { id: 'nutrition_goals', label: 'Nutrition Goals', type: 'text', placeholder: 'e.g., Weight loss, muscle gain, general health', required: true },
      { id: 'dietary_restrictions', label: 'Dietary Restrictions', type: 'textarea', placeholder: 'e.g., Vegan, gluten-free, lactose intolerant...', required: true },
      { id: 'calorie_target', label: 'Daily Calorie Target', type: 'number', placeholder: 'e.g., 2000', required: true },
    ]
  },
  {
    id: 'habit-tracker',
    name: 'Habit Tracker',
    description: 'Build and maintain positive habits with behavioral psychology insights',
    category: 'advanced',
    icon: '🔄',
    color: 'from-blue-500 to-blue-600',
    features: ['Habit Design', 'Behavior Psychology', 'Progress Analytics', 'Motivation Systems'],
    prompt: 'You are a behavioral psychology expert specializing in habit formation. Design a strategy to help the user build a new habit, using techniques like habit stacking and environment design.',
    inputs: [
      { id: 'target_habit', label: 'Habit to Build', type: 'text', placeholder: 'e.g., Meditate for 10 minutes daily', required: true },
      { id: 'current_routine', label: 'Current Morning Routine', type: 'textarea', placeholder: 'Describe what you do after you wake up...', required: true },
    ]
  },
  {
    id: 'mood-journal',
    name: 'Mood Journal',
    description: 'Track and analyze mood patterns with mental health insights',
    category: 'advanced',
    icon: '😊',
    color: 'from-purple-500 to-purple-600',
    features: ['Mood Analysis', 'Pattern Recognition', 'Trigger Identification', 'Wellness Strategies'],
    prompt: 'You are a mental health and wellness specialist. Analyze the user\'s mood entry and provide a reflective, supportive response. Identify potential patterns or triggers and suggest a simple wellness activity. This is not a substitute for professional therapy.',
    inputs: [
      { id: 'mood_entry', label: 'How are you feeling today and why?', type: 'textarea', placeholder: 'Describe your mood and any events that may have influenced it...', required: true },
    ]
  },
  {
    id: 'book-summarizer',
    name: 'Book Summarizer',
    description: 'Create comprehensive book summaries and extract actionable insights',
    category: 'advanced',
    icon: '📖',
    color: 'from-yellow-500 to-yellow-600',
    features: ['Key Insights', 'Actionable Points', 'Chapter Breakdown', 'Implementation Guide'],
    prompt: 'You are an expert book analyst. Provide a concise summary of the given book, focusing on its 3-5 most important takeaways and actionable advice.',
    inputs: [
      { id: 'book_title_author', label: 'Book Title & Author', type: 'text', placeholder: 'e.g., "Atomic Habits" by James Clear', required: true },
    ]
  },
  {
    id: 'meditation-guide',
    name: 'Meditation Guide',
    description: 'Personalized meditation instruction and mindfulness coaching',
    category: 'advanced',
    icon: '🧘',
    color: 'from-indigo-500 to-indigo-600',
    features: ['Guided Sessions', 'Technique Selection', 'Progress Tracking', 'Mindfulness Training'],
    prompt: 'You are a certified meditation teacher. Provide a script for a guided meditation session based on the user\'s goal and time.',
    inputs: [
      { id: 'meditation_goal', label: 'Meditation Goal', type: 'select', options: ['Reduce Stress', 'Improve Focus', 'Morning Energy', 'Evening Wind-down'], required: true },
      { id: 'duration', label: 'Duration (in minutes)', type: 'number', placeholder: 'e.g., 10', required: true },
    ]
  },
  {
    id: 'skill-coach',
    name: 'Skill Coach',
    description: 'Master-level skill development with expert-level coaching',
    category: 'advanced',
    icon: '🎓',
    color: 'from-teal-500 to-teal-600',
    features: ['Expert Coaching', 'Mastery Paths', 'Performance Analysis', 'Advanced Techniques'],
    prompt: 'You are a master-level skill development coach. Create a deliberate practice plan for the user to advance their skill from proficient to expert.',
    inputs: [
      { id: 'skill_domain', label: 'Skill to Master', type: 'text', placeholder: 'e.g., Public Speaking, Chess, Playing Guitar', required: true },
      { id: 'current_weakness', label: 'Current Biggest Weakness', type: 'textarea', placeholder: 'What specific area is holding you back?', required: true },
    ]
  },
  {
    id: 'time-audit-tool',
    name: 'Time Audit Tool',
    description: 'Comprehensive time tracking and productivity optimization analysis',
    category: 'advanced',
    icon: '⏰',
    color: 'from-orange-500 to-orange-600',
    features: ['Time Analysis', 'Productivity Metrics', 'Efficiency Optimization', 'Goal Alignment'],
    prompt: 'You are a time management expert. Analyze the user\'s time log and provide insights on their productivity, identifying time sinks and suggesting areas for improvement.',
    inputs: [
      { id: 'time_log', label: 'Yesterday\'s Time Log', type: 'textarea', placeholder: 'e.g., 9-10am: Emails, 10-12pm: Project X, 12-1pm: Lunch...', required: true },
      { id: 'main_goal', label: 'What was your main goal yesterday?', type: 'text', placeholder: 'e.g., Finish the report for Project X', required: true },
    ]
  },
  {
    id: 'language-learning-buddy',
    name: 'Language Learning Buddy',
    description: 'Advanced language learning with immersive practice and cultural insights',
    category: 'advanced',
    icon: '🌍',
    color: 'from-green-600 to-green-700',
    features: ['Immersive Practice', 'Cultural Context', 'Advanced Grammar', 'Fluency Development'],
    prompt: 'You are an advanced language learning partner. Engage the user in a conversation in their target language about the provided topic. Correct their mistakes naturally within the conversation.',
    inputs: [
      { id: 'target_language', label: 'Target Language', type: 'text', placeholder: 'e.g., Spanish, French, German', required: true },
      { id: 'conversation_topic', label: 'Conversation Topic', type: 'text', placeholder: 'e.g., "Your favorite movie", "Plans for the weekend"', required: true },
      { id: 'user_message', label: 'Start the conversation', type: 'textarea', placeholder: 'Write your first message in the target language...', required: true },
    ]
  },
  {
    id: 'sleep-coach',
    name: 'Sleep Coach',
    description: 'Optimize sleep quality and develop healthy sleep habits',
    category: 'advanced',
    icon: '😴',
    color: 'from-purple-600 to-purple-700',
    features: ['Sleep Analysis', 'Habit Optimization', 'Environment Design', 'Recovery Strategies'],
    prompt: 'You are a sleep specialist. Based on the user\'s sleep issues, create a personalized "wind-down" routine for them to follow before bed to improve sleep quality.',
    inputs: [
      { id: 'sleep_issues', label: 'Sleep Quality Issues', type: 'textarea', placeholder: 'e.g., Difficulty falling asleep, wake up in the middle of the night, mind is racing...', required: true },
      { id: 'current_evening_routine', label: 'Current Evening Routine', type: 'textarea', placeholder: 'What do you usually do in the 2 hours before bed?', required: true },
    ]
  },
  {
    id: 'emergency-overload-predictor',
    name: 'Emergency Overload Predictor',
    description: 'Predict system overloads and suggest preventative actions',
    category: 'advanced',
    icon: '📈',
    color: 'from-red-600 to-red-700',
    features: ['System Analysis', 'Bottleneck Identification', 'Scaling Advice', 'Preventative Measures'],
    prompt: 'You are a Site Reliability Engineer (SRE). Analyze the system architecture and metrics to predict potential overload scenarios and suggest preventative measures.',
    inputs: [
        { id: 'architecture', label: 'System Architecture', type: 'textarea', placeholder: 'Describe your system components (e.g., web servers, database, cache)...', required: true },
        { id: 'metrics', label: 'Current Metrics', type: 'textarea', placeholder: 'Provide key metrics (e.g., CPU utilization, memory usage, request latency)...', required: true },
        { id: 'scenario', label: 'Scenario', type: 'text', placeholder: 'e.g., "Black Friday sale starts in 1 hour"', required: true },
    ]
  },
  {
    id: 'disaster-relief-coordinator',
    name: 'Disaster Relief Coordinator',
    description: 'Coordinate disaster relief efforts and community response strategies',
    category: 'advanced',
    icon: '🤝',
    color: 'from-blue-600 to-blue-700',
    features: ['Resource Coordination', 'Volunteer Management', 'Community Response', 'Recovery Planning'],
    prompt: 'You are a disaster relief coordination expert. Create a priority action plan for the first 24 hours of a disaster scenario.',
    inputs: [
      { id: 'disaster_type', label: 'Disaster Type', type: 'text', placeholder: 'e.g., Earthquake, Hurricane, Wildfire', required: true },
      { id: 'affected_area', label: 'Affected Area', type: 'textarea', placeholder: 'Describe the affected geographic area and population...', required: true },
      { id: 'available_resources', label: 'Initial Available Resources', type: 'textarea', placeholder: 'What resources are immediately available?', required: true },
    ]
  },
  {
    id: 'eco-friendly-living-guide',
    name: 'Eco-Friendly Living Guide',
    description: 'Comprehensive sustainable living guidance and environmental impact reduction',
    category: 'advanced',
    icon: '🌱',
    color: 'from-green-600 to-green-700',
    features: ['Sustainability Assessment', 'Carbon Footprint', 'Eco-friendly Alternatives', 'Impact Tracking'],
    prompt: 'You are a sustainability expert. Help the user reduce their environmental impact by providing 5 actionable, high-impact changes they can make in a specific area of their life.',
    inputs: [
      { id: 'focus_area', label: 'Area to Improve', type: 'select', options: ['Home Energy', 'Transportation', 'Food & Diet', 'Shopping & Consumption', 'Waste Reduction'], required: true },
    ]
  },
  {
    id: 'traffic-flow-optimizer',
    name: 'Traffic Flow Optimizer',
    description: 'Optimize traffic patterns and transportation efficiency',
    category: 'advanced',
    icon: '🚦',
    color: 'from-yellow-600 to-yellow-700',
    features: ['Route Optimization', 'Traffic Analysis', 'Public Transit', 'Smart City Solutions'],
    prompt: 'You are a transportation engineer. Suggest three data-driven solutions to alleviate traffic congestion in a specific area.',
    inputs: [
      { id: 'area_description', label: 'Area Description', type: 'textarea', placeholder: 'Describe the area and its main roads/intersections...', required: true },
      { id: 'traffic_problem', label: 'Specific Traffic Problem', type: 'textarea', placeholder: 'e.g., Morning commute bottleneck at the main bridge', required: true },
    ]
  },
  {
    id: 'job-matcher',
    name: 'Job Matcher',
    description: 'Advanced job matching with career trajectory and market analysis',
    category: 'advanced',
    icon: '🎯',
    color: 'from-indigo-600 to-indigo-700',
    features: ['Skills Matching', 'Career Trajectory', 'Market Analysis', 'Salary Insights'],
    prompt: 'You are a career strategist. Based on the user\'s profile, suggest three less-obvious but potentially high-fit job roles or career paths they might not have considered.',
    inputs: [
      { id: 'professional_profile', label: 'Your Professional Profile', type: 'textarea', placeholder: 'Paste your resume or a detailed summary of your skills and experience...', required: true },
      { id: 'career_goals', label: 'Career Goals & Interests', type: 'textarea', placeholder: 'What do you enjoy doing? What are your long-term aspirations?', required: true },
    ]
  },
  {
    id: 'education-tutor',
    name: 'Education Tutor',
    description: 'Personalized education and tutoring across multiple subjects',
    category: 'advanced',
    icon: '👨‍🏫',
    color: 'from-blue-600 to-blue-700',
    features: ['Subject Expertise', 'Learning Adaptation', 'Progress Assessment', 'Study Strategies'],
    prompt: 'You are an expert educator. Explain a complex topic to the user using an analogy or metaphor to make it easier to understand.',
    inputs: [
      { id: 'complex_topic', label: 'Complex Topic to Explain', type: 'text', placeholder: 'e.g., Quantum Entanglement, General Relativity, Recursion', required: true },
    ]
  },
  {
    id: 'healthcare-symptom-checker',
    name: 'Healthcare Symptom Checker',
    description: 'Preliminary health assessment and medical guidance (not a substitute for professional care)',
    category: 'advanced',
    icon: '🏥',
    color: 'from-red-500 to-red-600',
    features: ['Symptom Analysis', 'Health Guidance', 'Medical Resources', 'Prevention Tips'],
    prompt: 'You are a health information specialist. Based on the symptoms, provide a list of potential (but not definitive) causes, and suggest what type of medical professional to consult. Disclaimer: This is not medical advice. Consult a doctor for any health concerns.',
    inputs: [
      { id: 'symptoms', label: 'Symptoms', type: 'textarea', placeholder: 'Describe your symptoms, their duration, and severity...', required: true },
      { id: 'age_gender', label: 'Age and Gender', type: 'text', placeholder: 'e.g., 35-year-old male', required: true },
    ]
  },
  {
    id: 'accessibility-assistant',
    name: 'Accessibility Assistant',
    description: 'Comprehensive accessibility guidance for digital and physical environments',
    category: 'advanced',
    icon: '♿',
    color: 'from-purple-600 to-purple-700',
    features: ['WCAG Compliance', 'Universal Design', 'Assistive Technology', 'Accessibility Audits'],
    prompt: 'You are an accessibility expert. Perform an accessibility audit on the provided component/description and provide a list of actionable recommendations for improvement based on WCAG guidelines.',
    inputs: [
      { id: 'component_description', label: 'Component Description or Code', type: 'textarea', placeholder: 'Describe or paste the code for a UI component (e.g., a login form, a navigation menu)...', required: true },
    ]
  },
  {
    id: 'mental-health-support',
    name: 'Mental Health Support',
    description: 'Mental wellness support and coping strategies (not a replacement for professional therapy)',
    category: 'advanced',
    icon: '💚',
    color: 'from-teal-500 to-teal-600',
    features: ['Wellness Strategies', 'Coping Techniques', 'Resource Guidance', 'Self-Care Planning'],
    prompt: 'You are a mental wellness specialist. Guide the user through a simple, evidence-based coping exercise for the feeling they are experiencing. This is not a substitute for professional therapy.',
    inputs: [
      { id: 'current_feeling', label: 'How are you feeling right now?', type: 'select', options: ['Anxious', 'Stressed', 'Overwhelmed', 'Sad', 'Angry'], required: true },
    ]
  },
  {
    id: 'financial-literacy-coach',
    name: 'Financial Literacy Coach',
    description: 'Comprehensive financial education and wealth-building strategies',
    category: 'advanced',
    icon: '📈',
    color: 'from-green-600 to-green-700',
    features: ['Financial Education', 'Investment Strategies', 'Retirement Planning', 'Risk Management'],
    prompt: 'You are a certified financial planner. Explain a complex financial concept in simple terms and provide a real-world example.',
    inputs: [
      { id: 'financial_concept', label: 'Financial Concept', type: 'text', placeholder: 'e.g., Compound Interest, Diversification, Asset Allocation', required: true },
    ]
  }
];
