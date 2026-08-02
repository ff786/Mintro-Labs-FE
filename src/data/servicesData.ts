import { LucideIcon, Palette, Globe, Smartphone, Monitor, Brain, BarChart3 } from 'lucide-react';

export interface OrbitTechnology {
  id: string;
  name: string;
  icon: LucideIcon;
  angle: number;
  radius: number;
  duration: number;
  delay: number;
  accent: string;
  subtitle: string;
  points: string[];
  badges: string[];
  technologies: string[];
}

export const technologies: OrbitTechnology[] = [
  {
    id: 'design',
    name: 'Brand Identity & Logo Design',
    icon: Palette,
    angle: 0,
    radius: 220,
    duration: 12,
    delay: 0,
    accent: '#a7e50e',
    subtitle: 'Premium brand systems and elegant identities.',
    points: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Palette', 'Stationery'],
    badges: ['Illustrator', 'Photoshop', 'Figma'],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Adobe XD', 'Sketch'],
  },
  {
    id: 'web',
    name: 'Website Development',
    icon: Globe,
    angle: 60,
    radius: 220,
    duration: 13,
    delay: 0.4,
    accent: '#67e8f9',
    subtitle: 'Modern web solutions for ambitious brands.',
    points: ['Landing Pages', 'Corporate Sites', 'Portfolio Sites', 'Maintenance', 'Optimization'],
    badges: ['Next.js', 'React', 'Spring Boot', 'Node.js'],
    technologies: ['Next.js', 'React', 'Spring Boot', 'Node.js', 'MongoDB', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'ui-ux',
    name: 'UI/UX Design',
    icon: Monitor,
    angle: 120,
    radius: 220,
    duration: 11,
    delay: 0.8,
    accent: '#d8b4fe',
    subtitle: 'Intuitive interfaces that delight users.',
    points: ['Website UI', 'Mobile UI', 'Wireframing', 'Prototypes', 'User Research'],
    badges: ['Figma', 'Adobe XD', 'Prototyping'],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Protopie', 'Maze', 'UserTesting'],
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    icon: Brain,
    angle: 180,
    radius: 220,
    duration: 14,
    delay: 1.2,
    accent: '#a7e50e',
    subtitle: 'Smart automation and intelligent workflows.',
    points: ['AI Chatbots', 'Lead Automation', 'Workflow Automation', 'Customer Support', 'Process Optimization'],
    badges: ['OpenAI', 'Python', 'n8n', 'LangChain'],
    technologies: ['OpenAI', 'n8n', 'Python', 'LangChain', 'Vector DB', 'GPT-4', 'Pinecone', 'Make.com'],
  },
  {
    id: 'mobile',
    name: 'Software Development',
    icon: Smartphone,
    angle: 240,
    radius: 220,
    duration: 10.5,
    delay: 1.6,
    accent: '#c4b5fd',
    subtitle: 'Custom applications built to scale.',
    points: ['CRM Systems', 'Booking Systems', 'Business Apps', 'iOS Apps', 'Android Apps'],
    badges: ['React Native', 'Flutter', 'TypeScript'],
    technologies: ['Java', 'Spring Boot', 'Flutter', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Firebase'],
  },
  {
    id: 'analytics',
    name: 'Social Media Management',
    icon: BarChart3,
    angle: 300,
    radius: 220,
    duration: 11.5,
    delay: 2,
    accent: '#86efac',
    subtitle: 'Growth-focused content and optimization.',
    points: ['Content Strategy', 'Post Design', 'Campaign Management', 'Analytics', 'Optimization'],
    badges: ['Social Media', 'Analytics', 'Growth'],
    technologies: ['Buffer', 'Hootsuite', 'Meta Business Suite', 'Google Analytics', 'Sprout Social', 'Later', 'Canva'],
  },
];