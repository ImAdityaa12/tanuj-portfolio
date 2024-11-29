import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex items-center h-[80%] px-10">
      <div className="max-w-[500px] flex flex-col gap-5 ">
        <p className="flex font-semibold tracking-wide">
          <Image src={"/palm.svg"} width={25} height={25} alt="palm" />
          Hi! I&apos;m{" "}
          <span className="text-[#4BB543] tracking-wide mx-1">
            Tanuj Pandey
          </span>{" "}
          & your go-to
        </p>
        <div className="text-5xl font-bold tracking-wider max-w-[400px]">
          Fashion &<div>UI-UX Designer</div>
        </div>
        <div className="flex items-center gap-4">
          <button className="border border-[#D5D5D5] py-5 px-10 rounded-md font-bold">
            Resume
          </button>
          <button className="border border-[#D5D5D5] py-5 px-10 rounded-md font-bold">
            E-Mail
          </button>
        </div>
        <p className="text-[#333333] text-xs">
          As a student, I&apos;ve developed strong independent and team-working
          skills, and now I&apos;m ready to contribute my expertise to a
          company.
        </p>
      </div>
      <div className="relative w-full h-[70%] pointer-events-none">
        <Image
          src={"/hero-section-image.svg"}
          fill
          alt="hero-section-image"
          className=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
