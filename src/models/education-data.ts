export interface Study {
  id: string;
  university: {
    name: string;
    url: string;
    location: string;
  };
  startDate: string;
  endDate: string;
  studyType:string
  faculty: string;
  primaryField: string;
  secondaryField: string;
  thesis: string;
}

export interface EducationData {
  title: string;
  studies: Study[];
}
