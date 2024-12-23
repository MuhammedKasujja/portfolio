import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IExperience } from "../../../types";

type Prop = {
  experience: IExperience;
};

export function ExperienceCard({ experience }: Prop) {
  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem value={experience.company}>
        <AccordionTrigger>
          <div className="flex flex-col w-full gap-2 pr-5">
            <div className="flex flex-row items-start justify-between w-full gap-2 md:gap-5">
              <div className="font-semibold">{experience.title}</div>
              <div className="text-sm">
                {experience.duration.startDate} - {experience.duration.endDate}
              </div>
            </div>
            <div className="flex flex-row items-baseline justify-between w-full gap-2 md:gap-5">
              <div>{experience.company}</div>
              <div>{experience.location}</div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>{experience.description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
