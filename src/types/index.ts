export interface Skill {
  name: string;
  category: 'mobile' | 'backend' | 'ai' | 'tools';
}

export interface ExperienceProject {
  name: string;
  description: string;
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'fulltime' | 'intern';
  projects: ExperienceProject[];
}

export interface Project {
  title: string;
  description: string;
  image: string | null;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade?: string;
  location: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: number;
  url?: string;
  bullets: string[];
}

export interface Award {
  title: string;
  event: string;
  year: number;
  description: string;
  rank: 'champion' | 'runner-up' | 'other';
}
