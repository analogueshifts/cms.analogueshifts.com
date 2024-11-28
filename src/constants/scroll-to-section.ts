export function scrollToSection(sectionId: string, center?: boolean) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: center ? "center" : "start",
    });
  }
}
