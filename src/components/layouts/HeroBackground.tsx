"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
export const HeroBackground = () => {
  const mapRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const map = mapRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      if (!map) return;

      const moveX = (clientX / innerWidth - 0.3) * 25;
      const moveY = (clientY / innerHeight - 0.3) * 100;

      gsap.to(map, {
        x: moveX,
        y: moveY,
        ease: "power2.out",
        duration: 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="p-0 m-0 overflow-hidden absolute top-0  flex flex-col justify-center items-center h-screen w-screen z-10 ">
      <Image
        ref={mapRef}
        src={"/assets/images/map.webp"}
        width={1792}
        height={1024}
        alt="hero background"
        className="w-[150%]   duration-150"
        fetchPriority="high"
        priority={true}
        placeholder="blur"
        blurDataURL="/assets/images/mapblur.jpg"
        sizes="100vw"
      />
      <div className=" border-t-2 border-[#1c0d0c] bg-amber-200/10 backdrop-blur-sm absolute bottom-0 left-0 w-full h-6  bg-[url('/assets/icons/toys_fan.svg')] bg-repeat-x"></div>
    </div>
  );
};
