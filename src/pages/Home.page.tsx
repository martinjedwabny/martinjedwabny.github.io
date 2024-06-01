import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";
import { FloatingNav } from "@/components/FloatingNav/FloatingNav";
import HeroSection from "@/components/HeroSection/HeroSection";
import { EducationSection } from "@/components/EducationSection/EducationSection";
import { links } from "@/utils/links";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import GoTop from "@/components/GoTop/GoTop";

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
    name: "Education",
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
      <ExperienceSection />
      <EducationSection />
      <AboutSection />
      <GoTop />
    </main>
  );
}
