import { contactsInfo } from "../../data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "@/assets/github.svg";

export function Contacts() {
  return (
    <Card>
      <CardContent className="p-8 space-y-3 text-center">
        <h3 className="mb-4 text-2xl font-bold">Let's Connect</h3>
        <p className="flex items-center justify-center gap-2">
          Email:
          <a href={`mailto:${contactsInfo.email}`} className="text-blue-500 underline">
            {contactsInfo.email}
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <a href={contactsInfo.linkedin} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="24"
              height="24"
              fill="white"
              style={{
                backgroundColor: "#0966C2",
                borderRadius: "4px",
                padding: "4px",
              }}
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.73 53.73 0 1 1 53.73-53.73 53.73 53.73 0 0 1-53.73 53.73zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 16-44 31.4-2.3 5.6-2.8 13.3-2.8 21.1V448h-92.4s1.2-269.5 0-297.1h92.4v42.1c12.3-19 34.4-46.1 83.6-46.1 61 0 106.8 39.8 106.8 125.4z" />
            </svg>
          </a>
          <a href={contactsInfo.github.url} target="_blank">
            <Avatar className="w-6 h-6 rounded-md ">
              <AvatarImage src={profileImage} alt="@github" />
              <AvatarFallback className="rounded-md">github</AvatarFallback>
            </Avatar>
          </a>
        </p>
      </CardContent>
    </Card>
  );
}
