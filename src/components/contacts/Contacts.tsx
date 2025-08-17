import { contactsInfo } from "../../data";
import { Card, CardContent } from "@/components/ui/card";
import { GitHubIcon, LinkedinIcon } from "../icons";

export function Contacts() {
  return (
    <Card>
      <CardContent className="p-8 space-y-3 text-center">
        <h3 className="mb-4 text-2xl font-bold">Let's Connect</h3>
        <p className="flex items-center justify-center gap-2">
          Email:
          <a
            href={`mailto:${contactsInfo.email}`}
            className="text-blue-500 underline"
          >
            {contactsInfo.email}
          </a>
        </p>
        <p className="flex items-center justify-center gap-4">
          <LinkedinIcon />
          <GitHubIcon />
        </p>
      </CardContent>
    </Card>
  );
}