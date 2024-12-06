export enum ExperienceType {
  work = "Work Experience",
  internship = "Internship",
  volunteery = "Volunteery",
}

export type ILanguage = {
  name: string;
  iconifyClass: string;
};

export type Link = {
  name: string;
  iconifyClass: string;
  url: string;
};

export type IProject = {
  id: string;
  name: string;
  url?: string;
  description: string;
  languages: ILanguage[];
  links: Link[];
};

export type IDuration = {
  startDate: string;
  endDate: string;
};

export type IExperience = {
  title: string;
  company: string;
  company_url?: string;
  logo_path?: string;
  location: string;
  description: string;
  bgColor: string;
  duration: IDuration;
};
