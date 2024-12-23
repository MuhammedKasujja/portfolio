import { About } from "./components/about/About";
import { NavigationHearder } from "./components/about/Header";
import { Contacts } from "./components/contacts/Contacts";
import { Experience } from "./components/experiense/Experience";
import { Projects } from "./components/projects/Project";
import { Skills } from "./components/skills";

export default function App() {
  // max-w-7xl m-auto
  return (
    <div className="container flex flex-col justify-center gap-5 px-10 py-8">
      <div className="flex justify-end">
        <NavigationHearder />
      </div>
      <div className="grid grid-cols-6">
        <div className="col-span-2">
          <About />
        </div>
        <div className="col-span-4">
          <Skills />
        </div>
      </div>
      <Experience />
      <Projects />
      <Contacts />
    </div>
  );
}
