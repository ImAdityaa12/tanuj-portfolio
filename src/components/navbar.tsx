import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Me",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/tanuj-pandey-55258223a",
    },
    {
      name: "Behance",
      href: "https://www.behance.net/tanujpandey2",
    },
  ];
  return (
    <div className="fixed w-full top-0 bg-white shadow-sm shadow-black/[0.05]z-[50]">
      <div className="w-full h-[80px] flex items-center px-4 justify-between max-w-[1440px] mx-auto">
        <div className="relative w-[50px] h-[50px]">
          <Image
            src={"/logo.svg"}
            layout="fill"
            alt="logo"
            className="object-contain"
          />
        </div>
        <div>
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="px-4 text-sm tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
