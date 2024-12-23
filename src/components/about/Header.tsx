import { pageSections } from "../../data";
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
          variant={"ghost"}
          className="underline"
          onClick={() => scrollToElementById(section.scrollId)}
        >
          {section.title}
        </Button>
      ))}
    </section>
  );
}
