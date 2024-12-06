import { About } from "./components/about/About";
import { Experience } from "./components/experiense/Experience";
import { Projects } from "./components/projects/Project";
import { Skills } from "./components/skills";

export default function App() {
  return (
    <div className="flex flex-col gap-5 justify-center p-5">
      <About />
      <Skills/>
      <Experience />
      <Projects />
    </div>
  );
}
