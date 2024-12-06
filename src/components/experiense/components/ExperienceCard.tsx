import { IExperience } from "../../../types";

type Prop = {
  experience: IExperience;
};

export function ExperienceCard({ experience }: Prop) {
  return (
    <div className="space-y-2 p-4 rounded-md" style={{background: experience.bgColor}}>
      <div className="flex flex-row justify-between gap-5">
        <div className="font-semibold">{experience.title}</div>
        <div className="text-sm">
          {experience.duration.startDate} - {experience.duration.endDate}
        </div>
      </div>
      <div className="flex flex-row gap-5 items-baseline justify-between">
        <div>{experience.company}</div>
        <div>{experience.location}</div>
      </div>
      <div>{experience.description}</div>
    </div>
  );
}
