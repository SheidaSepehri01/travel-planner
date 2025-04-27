"use client";

import Image from "next/image";
export const HeroBackground = () => {
  return (
    <div className="p-0 m-0 overflow-hidden absolute top-0  flex flex-col justify-center items-center h-screen w-screen z-10 ">
      <Image
        src={"/assets/images/train.png"}
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
