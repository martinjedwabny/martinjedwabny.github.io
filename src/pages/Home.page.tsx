import { FloatingNav } from "@/components/FloatingNav/FloatingNav";
import HeroSection from "@/components/HeroSection/HeroSection";
import { links } from "@/utils/links";

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
    name: "Research",
    onClick: () => { },
  }
];

export function HomePage() {
  return (
    <main>
      <FloatingNav
        navItems={navItems}
        navIcons={[links[0], links[1]]}
      />
      <HeroSection />
      <div className="h-[200vh]"></div>
    </main>
  );
}
