import { skills } from "../../data";
import { Badge } from "../ui/badge";

export function SoftwareDevelopment() {
  return (
    <div className="space-y-5">
      <h1 className="font-bold text-2xl">{skills.develpoment.title}</h1>
      <div className="space-y-3">
        {skills.develpoment.skills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
      <div className="text-sm">Tech Stack:</div>
      <div className="flex flex-row gap-4 flex-wrap">
        {skills.develpoment.softwareSkills.map((item) => (
          <Badge className="rounded py-1.5 min-w-8"
            // style={{ background: item.style.color }}
          >
            {item.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
