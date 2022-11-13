export interface Project {
  title: string;
  url: string;
  git: string;
  description: string;
}

export interface ProjectData {
  title: string;
  projects: Project[];
}
