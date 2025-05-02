import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IExperience } from "../../../types";

type Prop = {
  experience: IExperience;
};

export function ExperienceCard({ experience }: Prop) {
  return (
    <Card className="w-full dark:bg-gray-800">
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col w-full gap-2 pr-5 space-y-2">
            <div className="flex flex-row items-start justify-between w-full gap-2 md:gap-5">
              <div className="font-semibold">{experience.title}</div>
              <div className="text-sm">
                {experience.duration.startDate} - {experience.duration.endDate}
              </div>
            </div>
            <div className="flex flex-row items-baseline justify-between w-full gap-2 md:gap-5">
              <div className="text-sm">{experience.company}</div>
              <div className="text-sm">{experience.location}</div>
            </div>
          </div>
        </CardTitle>
        <CardDescription className="space-y-2">
          <div className="pr-5">{experience.description}</div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
