import { projects } from "../../data";
import { ProjectItem } from "./components/ProjectItem";

export function Projects() {
  return (
    <div className="space-y-5" id="projects">
      <h1 className="font-bold text-2xl">Projects</h1>
      <div className="flex flex-row flex-wrap gap-5">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}
