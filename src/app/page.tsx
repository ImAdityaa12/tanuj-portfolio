import BringSection from "@/components/bring-section";
import ExpertiseSection from "@/components/expertise-section";
import HelpSection from "@/components/help-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SubHero from "@/components/sub-hero";
export default function Home() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <HeroSection />
      </div>
      <SubHero />
      <div className="max-w-[1440px] mx-auto">
        <ProjectsSection />
      </div>
      <ExpertiseSection />
      <div className="max-w-[1440px] mx-auto">
        <BringSection />
      </div>
      <HelpSection />
    </div>
  );
}
