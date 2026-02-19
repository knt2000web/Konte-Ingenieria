
export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[];
  features: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  type: string;
  year: string;
  image: string;
  images?: string[];
  video?: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  description?: string;
  area?: string;
  slug?: string;
  fullDescription?: string;
  seoKeywords?: string;
  seoH1?: string; // New field for optimized SEO H1
}

export interface ClientData {
  name: string;
  company: string;
  projects: {
    name: string;
    progress: number;
    budgetConsumed: number;
    nextMilestone: string;
  }[];
}

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  SERVICE_ANI = 'SERVICE_ANI',
  SERVICE_PH = 'SERVICE_PH',
  SERVICE_DIESEL = 'SERVICE_DIESEL',
  PROJECTS = 'PROJECTS',
  CONTACT = 'CONTACT',
  DASHBOARD = 'DASHBOARD'
}
