import { FloatingNav } from "@/components/FloatingNav/FloatingNav";
import HeroSection from "@/components/HeroSection/HeroSection";

const navItems = [
  {
    name: "Home",
    onClick: () => { },
  },
  {
    name: "Experience",
    onClick: () => { },
  },
  {
    name: "Projects",
    onClick: () => { },
  },
  {
    name: "Research",
    onClick: () => { },
  },
  {
    name: "Contact",
    onClick: () => { },
  },
];

export function HomePage() {
  return (
    <>
      <FloatingNav
        navItems={navItems}
        className="hidden md:flex"
      />
      <HeroSection />
      <div className="h-[200vh]"></div>
    </>
  );
}
