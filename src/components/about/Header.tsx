import { pageSections } from "../../data";

export function NavigationHearder() {
  const scrollToElementById = (scrollId?: string) => {
    if (scrollId) {
      const element = document.getElementById(scrollId);
      element?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="flex flex-row gap-4">
      {pageSections.map((section) => (
        <button
          className="cursor-pointer"
          onClick={() => scrollToElementById(section.scrollId)}
        >
          {section.title}
        </button>
      ))}
    </section>
  );
}
