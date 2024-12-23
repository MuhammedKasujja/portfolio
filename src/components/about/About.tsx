import { greeting } from "../../data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "@/assets/20240516_090002.jpg"

export function About() {
  return (
    <div className="space-y-2">
      <Avatar className="w-full md:w-72 h-[400px] rounded-md">
        <AvatarImage src={profileImage} alt="@km" />
        <AvatarFallback className="rounded-md">KM</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold">{greeting.fullName}</h1>
      <a href={greeting.githubLink} target="_blank">
        {greeting.nickname}
      </a>
    </div>
  );
}
