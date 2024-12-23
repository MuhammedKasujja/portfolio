import { contactsInfo } from "../../data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contacts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Me</CardTitle>
        <CardDescription>
          {contactsInfo.contactSection.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Your email" type="email"></Input>
        </div>
        <div className="space-y-1">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Your email"></Textarea>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
