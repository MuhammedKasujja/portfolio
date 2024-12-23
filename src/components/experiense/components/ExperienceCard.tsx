import { IExperience } from "../../../types";

type Prop = {
  experience: IExperience;
};

export function ExperienceCard({ experience }: Prop) {
  return (
    <div className="p-4 space-y-2 rounded-md" >
      <div className="flex flex-row justify-between gap-5">
        <div className="font-semibold">{experience.title}</div>
        <div className="text-sm">
          {experience.duration.startDate} - {experience.duration.endDate}
        </div>
      </div>
      <div className="flex flex-row items-baseline justify-between gap-5">
        <div>{experience.company}</div>
        <div>{experience.location}</div>
      </div>
      <div>{experience.description}</div>
    </div>
  );
}
