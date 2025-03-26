"use client";
import { useRef } from "react";
import { HeroBackground } from "../layouts/HeroBackground";
import { ToyFanMargin } from "../layouts/ToyFanMargin";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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

  return (
    <div className="w-full p-0 m-0 h-fit  grid grid-cols-1 grid-rows-[93vh_100vh] gap-0 ">
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
      <div className="relative h-screen w-full " ref={sectionRef}>
        <div className="bg-amber-200 w-full h-screen flex justify-start items-start  text-black bg-[url('/assets/images/texture.jpg')] bg-cover bg-center bg-no-repeat">
          <ToyFanMargin />
          <div
            className="h-fit w-[40%] relative top-1/3 -translate-y-1/3 left-1/3 flex flex-col justify-baseline items-start"
            dir="ltr"
          >
            <h1 className="text-3xl font-bold text-left flex justify-start items-start">
              Plan Your Next Trip with us.
            </h1>
            <p className="text-xl">
              We are a team of passionate travel enthusiasts dedicated to
              helping you plan your next adventure with ease and excitement.
              With our intuitive platform, you can seamlessly track your
              expenses, manage your budget, and organize every detail of your
              trip—all in one place. Our user-friendly interface, enhanced with
              stunning visuals and smooth animations, makes travel planning an
              enjoyable experience. Whether youre embarking on a solo journey, a
              family vacation, or a group adventure, we provide the tools to
              make your trip stress-free and unforgettable. Let us take the
              hassle out of planning so you can focus on making memories!
            </p>
          </div>
        </div>
      </div>
      <div className="relative h-screen w-full " ref={sectionRef}>
        <div className="bg-amber-200 w-full h-screen flex justify-start items-start  text-black bg-[url('/assets/images/texture.jpg')] bg-cover bg-center bg-no-repeat">
          <div
            className="h-fit w-[40%] relative top-1/3 -translate-y-1/3 left-1/3 flex flex-col justify-baseline items-start"
            dir="ltr"
          >
            <h1 className="text-3xl font-bold text-left flex justify-start items-start">
              track your expenses
            </h1>
            <p className="text-xl">
              With our intuitive platform, you can seamlessly track your
              expenses, manage your budget, and organize every detail of your
              trip—all in one place. Our user-friendly interface, enhanced with
              stunning visuals and smooth animations, makes travel planning an
              enjoyable experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
