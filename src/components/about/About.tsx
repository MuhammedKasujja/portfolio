import { greeting } from "../../data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function About() {
  return (
    <div className="">
      <Avatar className="w-72 h-[400px] rounded-md">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold">{greeting.fullName}</h1>
      <a href={greeting.githubLink} target="_blank">
        {greeting.nickname}
      </a>
    </div>
  );
}
