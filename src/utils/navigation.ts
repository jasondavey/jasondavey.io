// Shared navigation sections for the website
// Used by Navbar and Footer to maintain consistency

export interface NavigationSection {
  name: string;
  href: string;
}

export const navigationSections: NavigationSection[] = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Career", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default navigationSections;
