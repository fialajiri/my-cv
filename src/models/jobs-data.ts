export interface Job {
  id: string;
  company: {
    name: string;
    url: string;
    location: string;
  };
  jobTitle: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface JobsData {
  title: string;
  jobs: Job[];
}
