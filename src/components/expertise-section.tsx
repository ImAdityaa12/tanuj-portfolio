import Image from "next/image";
import React from "react";

const ExpertiseSection = () => {
  return (
    <div className="bg-[#F7F7FA] h-[700px] w-full max-sm:px-4">
      <div className="max-w-[1100px] mx-auto">
        <div className="w-full flex h-[300px] items-center">
          <div className="w-full">
            <h1 className="font-bold text-4xl max-w-[600px]">
              Let&apos;s start new journey with me, I&apos;ve{" "}
              <span className="text-[#4BB543]">expertise</span> in these
              software&apos;s
            </h1>
            <p className="text-sm mt-[27px] leading-[19px] text-[#333333] w-full tracking-wider">
              From creating wireframes and prototypes to high-fidelity mockups
              and animations, I blend design tools and fashion insights to bring
              my creations to life.
            </p>
          </div>
          <div className="relative w-[500px] h-[400px]">
            <Image src={"/person-thinking.svg"} fill alt="expertise" />
          </div>
        </div>
        <div className="mt-[40px] w-full grid grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <Image src={"/figma.svg"} width={60} height={60} alt="figma" />
            <h1 className="font-bold text-xl">Figma</h1>
            <p>
              3+ years of experience with Figma, I’m now pretty much a pro (or
              close enough)!
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Image src={"/figma.svg"} width={60} height={60} alt="figma" />
            <h1 className="font-bold text-xl">Figma</h1>
            <p>
              3+ years of experience with Figma, I’m now pretty much a pro (or
              close enough)!
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Image src={"/figma.svg"} width={60} height={60} alt="figma" />
            <h1 className="font-bold text-xl">Figma</h1>
            <p>
              3+ years of experience with Figma, I’m now pretty much a pro (or
              close enough)!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
