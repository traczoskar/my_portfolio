// Slices Types:

export interface ProjectDetailsState {
  isOpen: boolean;
  currentProjectId: string | null;
}

export interface SelectedProjectState {
  project: Project;
}

export interface ThemeState {
  isDarkTheme: boolean;
}

export interface LanguageState {
  isLanguageEN: boolean;
}

// Components Types:
export interface Project {
  route: string;
  label: {
    en: string;
    pl: string;
  };
  image: string;
  icon: string;
  description: {
    en: string;
    pl: string;
  };
  screenshots?: Screenshot[];
  features?: {
    en: Feature[];
    pl: Feature[];
  };
  tech: string[];
  whatDidILearn?: {
    en: string[];
    pl: string[];
  };
  repo: string;
  live: string;
}

interface Feature {
  name: string;
  content: string;
}

export interface Technology {
  name: string;
  icon?: string;
}

export type Screenshot = {
  alt: string;
  imageUrl: string;
};
