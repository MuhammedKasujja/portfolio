import { IProject } from "@/types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  project: IProject;
};

export function ProjectItem({ project }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="font-semibold">
        <CardTitle>{project.name}</CardTitle>
      </CardHeader>
      <CardContent>{project.description}</CardContent>
    </Card>
  );
}
