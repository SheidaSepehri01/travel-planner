"use client";
import { useRef } from "react";
import { HeroBackground } from "../layouts/HeroBackground";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { Playwrite_RO } from "next/font/google";
import { useAuthStore } from "../../stores/auth";
const playwrite = Playwrite_RO({
  variable: "--font-playwrite",
});
export const HomeHero = () => {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const headerRef = useRef<null | HTMLDivElement>(null);
  const { user } = useAuthStore();
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
      <div className="max-h-screen h-full w-full flex  justify-center items-center">
        <HeroBackground />
        <div className="w-full h-fit absolute top-36 left-5 ">
          <div className="bg-amber-100/5 relative top-0  backdrop-blur-md rounded-lg w-[50%] p-6 h-64 z-50 flex flex-col justify-start  items-start">
            <h1
              className={` ${playwrite.className} w-full z-50 h-fit font-extrabold font-sans text-stone-900  `}
              style={{ fontSize: "70px", textAlign: "left" }}
              ref={headerRef}
            >
              Traveling Journal
            </h1>
            <Link
              className=" text-black text-2xl px-4 py-2 mt-5"
              href={user ? "/addPlan" : "/signUp"}
            >
              start planning your next trip now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
