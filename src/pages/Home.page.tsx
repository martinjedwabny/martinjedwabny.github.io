import { FloatingNav } from "@/components/FloatingNav/FloatingNav";
import HeroSection from "@/components/HeroSection/HeroSection";
import githubIcon from "@/images/github.svg";
import linkedinIcon from "@/images/linkedin.svg";

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

const navIcons = [
  {
    name: "Github",
    iconPath: githubIcon,
    href: "https://github.com/martinjedwabny"
  },
  {
    name: "LinkedIn",
    iconPath: linkedinIcon,
    href: "https://www.linkedin.com/in/martinjedwabny/"
  }
];

export function HomePage() {
  return (
    <>
      <FloatingNav
        navItems={navItems}
        navIcons={navIcons}
      />
      <HeroSection />
      <div className="h-[200vh]"></div>
    </>
  );
}
