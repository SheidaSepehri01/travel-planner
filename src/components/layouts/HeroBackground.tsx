"use client";

import Image from "next/image";
import heroBackground from "../../assets/images/christine-roy-ir5MHI6rPg0-unsplash.jpg";
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
      // Get map size
      // const mapWidth = map.offsetWidth;
      // const mapHeight = map.offsetHeight;

      // Calculate max movement so edges don’t show
      //   const maxX = (mapWidth - innerWidth) / 2;
      //   const maxY = (mapHeight - innerHeight) / 2;

      const moveX = (clientX / innerWidth - 0.3) * 25;
      const moveY = (clientY / innerHeight - 0.3) * 100;

      gsap.to(map, {
        blur: 40,
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
    <div className="p-0 m-0 overflow-hidden absolute top-0  flex flex-col justify-center items-center h-screen w-screen z-10">
      <Image
        ref={mapRef}
        src={heroBackground}
        alt="hero background"
        className="w-[150%] h-[120%] scale-x-110 duration-150"
      />
    </div>
  );
};
