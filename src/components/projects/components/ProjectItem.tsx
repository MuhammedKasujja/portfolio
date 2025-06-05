import { IProject } from "@/types";
import {
  Card,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <CardFooter className="flex flex-wrap gap-x-4 gap-y-2">
        {project.languages.map((lang, index) => (
          <Badge key={index.toString()}>{lang.name}</Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
