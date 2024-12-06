import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto mb-[172px]">
      <div className="flex items-center gap-[150px] mt-[112px]">
        <div className="max-w-[650px]">
          <h1 className="text-[#4BB543] font-bold">UI-UX</h1>
          <h1 className="mt-[10px] text-3xl font-bold">05 Projects</h1>
          <p className="mt-6">
            Exploring the Interaction of Design and Innovation: Here are a few
            selected projects that highlight my passion for designing intuitive
            and impactful user experiences.
          </p>
          <button className=" border border-[#D5D5D5] py-2 px-5 rounded-md font-bold hover:bg-[#0A0A0A] hover:text-white transition-all mt-6">
            View All Works
          </button>
        </div>
        <div className="relative w-[400px] h-[280px]">
          <Image src={"/ui-ux-project.svg"} alt="ui-ux-project" fill />
        </div>
      </div>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

function ProjectCard() {
  return (
    <div className="mt-[100px]">
      <div className="w-full flex gap-[55px]">
        <div className="relative min-w-[700px] h-[531px]">
          <Image src={"/bridging-the-gap.svg"} fill alt="bridging-the-gap" />
        </div>
        <div className="w-full h-[531px] flex flex-col gap-4">
          <div className="flex items-center gap-4 mt-auto">
            <Image src={"/medal.svg"} width={20} height={20} alt="medal" />
            <p className="text-xs font-bold bg-[#F7F7FA] px-3 py-2 rounded-full">
              UI-UX Hackathon Project
            </p>
          </div>
          <h1 className="text-2xl font-bold">Bridging the Gap</h1>
          <p className="text-sm text-[#333333] leading-[31px]">
            Secured 3rd place nationally at the NIFT x ONDC 5-Day UI/UX Design
            Hackathon. Our project delved into the psychographics of
            non-shoppers, crafting innovative solutions for real-world
            challenges in complex systems. Through in-depth research and a
            holistic approach, we designed and optimized user-centric
            experiences that seamlessly integrated functionality and innovation.
          </p>
          <button className="flex items-center text-sm font-bold text-[#4BB543]">
            View Case Study
            <ArrowRight strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
export default page;
