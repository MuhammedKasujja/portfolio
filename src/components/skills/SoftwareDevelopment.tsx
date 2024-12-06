import { skills } from "../../data";

export function SoftwareDevelopment() {
  return (
    <div className="space-y-5">
      <h1 className="font-bold text-2xl">{skills.develpoment.title}</h1>
      <div className="space-y-3">
        {skills.develpoment.skills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
      <div className="flex flex-row gap-4 flex-wrap">
        {skills.develpoment.softwareSkills.map((item) => (
          <div
            className="p-2 rounded text-white min-w-14 flex justify-center"
            style={{ background: item.style.color }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
