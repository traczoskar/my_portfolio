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
  tech: string[];
  repo: string;
  live: string;
  description: string;
  features?: Feature[];
}

interface Feature {
  name: string;
  content: string;
}

export interface Technology {
  name: string;
  icon: string;
}
