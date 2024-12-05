import { About } from "./components/about/About";
import { Experience } from "./components/experiense/Experience";
import { Projects } from "./components/projects/Project";

export default function App() {
  return (
    <div className="flex flex-col gap-5 justify-center w-screen p-5">
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
