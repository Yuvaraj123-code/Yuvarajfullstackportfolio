import { FeatureThree } from "@/ui/FeatureThree";
import HeroSection from "@/ui/HeroSection";
import HireMe from "@/ui/HireMe/HireMe";
import { Projects } from "@/ui/Projects";

function home() {
  return (
    <>
      <title>Yuvaraj Official Portfolio Website</title>
      <HeroSection />
      <FeatureThree />
      <Projects />
      <HireMe />
    </>
  );
}

export default home;
