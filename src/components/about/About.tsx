import { greeting, pageSections } from "../../data";

export function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold underline">{greeting.fullName}</h1>
        <a href={greeting.githubLink} target="_blank">
          {greeting.nickname}
        </a>
      </div>
      <section className="flex gap-4 flex-row">
        {pageSections.map((section) => (
          <a className="cursor-pointer ">{section.title}</a>
        ))}
      </section>
    </div>
  );
}
