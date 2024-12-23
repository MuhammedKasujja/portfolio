import { About } from "./components/about/About";
import { Contacts } from "./components/contacts/Contacts";
import { Experience } from "./components/experiense/Experience";
import { Projects } from "./components/projects/Project";
import { Skills } from "./components/skills";

export default function App() {
  // max-w-7xl m-auto
  return (
    <div className="container flex flex-col justify-center gap-5 px-10 py-6">
      <About />
      <Skills/>
      <Experience />
      <Projects />
      <Contacts/>
    </div>
  );
}
