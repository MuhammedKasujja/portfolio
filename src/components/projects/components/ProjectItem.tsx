import { IProject } from "../../../types";

type Props = {
  project: IProject;
};

export function ProjectItem({ project }: Props) {
  return (
    <div className="flex flex-col gap-4 bg-slate-300 w-full px-5 py-4 rounded-md">
      <div className="font-semibold">{project.name}</div>
      <div>{project.description}</div>
    </div>
  );
}
