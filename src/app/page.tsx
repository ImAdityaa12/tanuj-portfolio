import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-[calc(100vh-80px)]">
        <HeroSection />
        <div className="w-full h-[calc(100vh-80%-80px)]">
          <p className="text-sm text-[#4BB543] text-center">
            A FEW OF THE PLACES I WORKED
          </p>
          <div className="relative flex items-center justify-center w-[80%] h-[70%] mx-auto">
            <Image
              src={"/company-logos.svg"}
              alt="company-logos"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
