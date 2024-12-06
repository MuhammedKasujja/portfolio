import { About } from "./components/about/About";
import { Contacts } from "./components/contacts/Contacts";
import { Experience } from "./components/experiense/Experience";
import { Projects } from "./components/projects/Project";
import { Skills } from "./components/skills";

export default function App() {
  // max-w-7xl m-auto
  return (
    <div className="flex flex-col gap-5 justify-center px-10 py-7">
      <About />
      <Skills/>
      <Experience />
      <Projects />
      <Contacts/>
    </div>
  );
}
