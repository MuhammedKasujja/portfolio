import { skills } from "../../data";

export function Cloud() {
  return (
    <div className="space-y-5">
      <h1 className="font-bold text-2xl">{skills.cloud.title}</h1>
      <div className="space-y-3">
        {skills.cloud.skills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        {skills.cloud.services.map((service) => (
          <div
            className="p-2 rounded text-white"
            style={{ background: service.style.color }}
          >
            {service.name}
          </div>
        ))}
      </div>
    </div>
  );
}
