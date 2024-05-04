// Slices Types:

export interface ProjectDetailsState {
  isOpen: boolean;
  currentProjectId: string | null;
}

export interface ThemeState {
  isDarkTheme: boolean;
}

export interface Project {
  label: string;
  image: string;
  route: string;
}
