// Slices Types:

export interface ProjectDetailsState {
  isOpen: boolean;
  currentProjectId: string | null;
}

export interface ThemeState {
  isDarkTheme: boolean;
}

export interface Project {
  route: string;
  label: string;
  image: string;
  icon: string;
  description: string;
  features?: Feature[];
  tech: string[];
  whatDidILearn?: string[];
  repo: string;
  live: string;
}

interface Feature {
  name: string;
  content: string;
}

export interface Technology {
  name: string;
  icon: string;
}
