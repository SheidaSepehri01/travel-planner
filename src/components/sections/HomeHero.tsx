"use client";
import { useRef } from "react";
import { HeroBackground } from "../layouts/HeroBackground";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { Playwrite_RO } from "next/font/google";
import { useAuthStore } from "../../stores/auth";
import { ButtonStylish } from "../ui/ButtonStylish";
const playwrite = Playwrite_RO({
  variable: "--font-playwrite",
});
import { useRouter } from "next/navigation";
export const HomeHero = () => {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const headerRef = useRef<null | HTMLDivElement>(null);
  const { user } = useAuthStore();
  const router = useRouter();

  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      blur: 30,
      duration: 2,
      ease: "power2.out",
    });
  }, [sectionRef, headerRef]);

  return (
    <div className="w-screen p-0 m-0 h-screen  grid grid-cols-1 grid-rows-1 gap-0  overflow-hidden">
      <div className="max-h-screen h-full w-full flex  flex-col md:!flex-row md:justify-center justify-start items-start md:items-center">
        <div className="md:h-full h-1/2 w-full">
          <HeroBackground />
        </div>
        <div className="w-fit p-10 h-fit relative md:!absolute md:bottom-16 left-5 flex justify-center items-center">
          <div className="bg-amber-100/5 relative top-0  backdrop-blur-md rounded-lg w-fit p-6 h-fit z-50 flex flex-col justify-between items-start space-y-4">
            <h1
              className={` ${playwrite.className} w-full z-50 h-fit font-extrabold font-sans text-stone-900  `}
              style={{ fontSize: "50px", textAlign: "left" }}
              ref={headerRef}
            >
              Traveling Journal
            </h1>
            <p className="p-2 text-lg text-left w-2/3 ">
              plan your trips and keep track of your budget, most importantly
              keep your trips memory.
            </p>
            <Link
              className=" px-4 mt-8"
              href={user ? "/addAPlan" : "/register"}
            >
              <ButtonStylish
                children={"start planning your next trip now"}
                action={() => {}}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
