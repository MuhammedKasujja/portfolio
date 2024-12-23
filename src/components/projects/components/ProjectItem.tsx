import { IProject } from "@/types";
import {
  Card,
  // CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  project: IProject;
};

export function ProjectItem({ project }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      {/* <CardContent>{project.description}</CardContent> */}
    </Card>
  );
}
