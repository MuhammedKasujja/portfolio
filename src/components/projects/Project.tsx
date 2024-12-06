import { projects } from "../../data";
import { ProjectItem } from "./components/ProjectItem";

export function Projects() {
  return (
    <div className="space-y-5" id="projects">
      <h1 className="font-bold text-2xl">Projects</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}
