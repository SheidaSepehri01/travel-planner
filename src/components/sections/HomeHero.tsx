"use client";
import { useRef } from "react";
import { HeroBackground } from "../layouts/HeroBackground";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
export const HomeHero = () => {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const headerRef = useRef<null | HTMLDivElement>(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      blur: 30,
      duration: 2,
      ease: "power2.out",
    });
  }, [sectionRef, headerRef]);

  const BelowTheFold = dynamic(
    () => import("../layouts/BelowTheFold").then((mod) => mod.BelowTheFold),
    {
      ssr: false,
      loading: () => <div>... loading</div>,
    }
  );
  return (
    <div className="w-full p-0 m-0 h-fit  grid grid-cols-1 grid-rows-[93vh_100vh_100vh] gap-0  overflow-hidden">
      <div className="max-h-screen h-fit w-full flex  justify-center items-center ">
        <HeroBackground />
        <div className=" w-full h-fit z-50 flex flex-col justify-start relative top-20 left-20 items-start">
          <h1
            className="w-full z-50 h-fit font-extrabold font-sans text-black  tracking-tighter"
            style={{ fontSize: "70px", textAlign: "left" }}
            ref={headerRef}
          >
            Plan Your Next Trip
          </h1>
          <button
            className=" text-black text-2xl px-4 py-2 font-bold"
            onClick={handleScroll}
          >
            start planning now
          </button>
        </div>
      </div>
      <div className="w-full h-fit mt-4 overflow-hidden">
        <BelowTheFold sectionRef={sectionRef} />
      </div>
    </div>
  );
};
