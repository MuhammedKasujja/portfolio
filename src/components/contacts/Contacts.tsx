import { contactsInfo } from "../../data";

export function Contacts() {
  return (
    <div className="space-y-5">
      <h1 className="font-bold text-2xl">Contacts</h1>
      <div>{contactsInfo.contactSection.title}</div>
      <div>{contactsInfo.contactSection.description}</div>
    </div>
  );
}
