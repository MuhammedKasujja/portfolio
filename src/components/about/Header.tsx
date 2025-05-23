import { pageSections } from "../../data";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";

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
    <section className="flex flex-row flex-wrap gap-2">
      {pageSections.map((section) => (
        <Button
          key={section.title}
          asChild={section.link !== undefined}
          variant={"ghost"}
          className="underline"
          onClick={() => scrollToElementById(section.scrollId)}
        >
          {section.link !== undefined ? (
            <a href={section.link} download target="_blank">{section.title}</a>
          ) : (
            section.title
          )}
        </Button>
      ))}
      <ThemeToggle />
    </section>
  );
}
