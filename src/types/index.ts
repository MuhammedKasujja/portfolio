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
