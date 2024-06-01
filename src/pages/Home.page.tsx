import { ExperienceSection } from "@/components/ExperienceSection/ExperienceSection";
import { FloatingNav } from "@/components/FloatingNav/FloatingNav";
import HeroSection from "@/components/HeroSection/HeroSection";
import { EducationSection } from "@/components/EducationSection/EducationSection";
import { links } from "@/utils/links";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import GoTop from "@/components/GoTop/GoTop";
import { useRef } from "react";

export function HomePage() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const navItems = [
    {
      name: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
    {
      name: "Experience",
      onClick: () => window.scrollTo({ top: experienceRef.current?.offsetTop! - 100, behavior: 'smooth' }),
    },
    {
      name: "Education",
      onClick: () => window.scrollTo({ top: educationRef.current?.offsetTop! - 100, behavior: 'smooth' }),
    }
  ];
  return (
    <main>
      <FloatingNav
        navItems={navItems}
        navIcons={[links[0], links[1]]}
      />
      <HeroSection />

      <div ref={experienceRef} />
      <ExperienceSection />

      <div ref={educationRef} />
      <EducationSection />

      <AboutSection />
      <GoTop />
    </main>
  );
}
