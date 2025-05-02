import { skills } from "../../data";
import { Badge } from "../ui/badge";

export function Cloud() {
  return (
    <div className="space-y-5">
      <h1 className="font-bold text-2xl">{skills.cloud.title}</h1>
      <div className="space-y-3">
        {skills.cloud.skills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
      <div className="text-sm">Tools & Platforms:</div>
      <div className="flex flex-row gap-4 flex-wrap">
        {skills.cloud.services.map((service) => (
          <Badge
            className="rounded py-1.5"
            // style={{ background: item.style.color }}
          >
            {service.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
