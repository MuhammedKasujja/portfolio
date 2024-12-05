import { greeting } from "../../data";

export function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{greeting.fullName}</h1>
      <p>{greeting.nickname}</p>
    </div>
  );
}
