import { IProject } from "../../../types";

type Props = {
  project: IProject;
};

export function ProjectItem({ project }: Props) {
  return (
    <div className="flex flex-col gap-4 bg-slate-300 max-w-96 px-5 py-4 rounded-md">
      <div className="font-semibold">{project.name}</div>
      <div>{project.description}</div>
    </div>
  );
}
