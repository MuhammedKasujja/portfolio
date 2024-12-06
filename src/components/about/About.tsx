import { greeting, pageSections } from "../../data";

export function About() {
  const scrollToElementById = (scrollId?: string) => {
    if (scrollId) {
      const element = document.getElementById(scrollId);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold">{greeting.fullName}</h1>
        <a href={greeting.githubLink} target="_blank">
          {greeting.nickname}
        </a>
      </div>
      <section className="flex gap-4 flex-row">
        {pageSections.map((section) => (
          <button
            className="cursor-pointer"
            onClick={() => scrollToElementById(section.scrollId)}
          >
            {section.title}
          </button>
        ))}
      </section>
    </div>
  );
}
