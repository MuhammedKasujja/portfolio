import { experience } from "../../data";
import { ExperienceCard } from "./components/ExperienceCard";

export function Experience() {
  return (
    <div className="space-y-5" id="experience">
      <h1 className="font-bold text-2xl">Experience</h1>
      {experience.sections[0].experiences.map((exp) => (
        <ExperienceCard experience={exp} />
      ))}
    </div>
  );
}
