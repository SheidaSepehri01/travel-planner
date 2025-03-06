"use client";
import Pen from "@/assets/icons/pen.svg";
import Image from "next/image";
import { ButtonBasic } from "../ui/ButtonBasic";
import { useRef } from "react";
export const HomeHero = () => {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full p-0 m-0 h-fit flex flex-col justify-center ">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <h1
          className="w-full h-fit font-extrabold font-sans text-black/90 tracking-tighter"
          style={{ fontSize: "100px", textAlign: "center" }}
        >
          Plan Your Next Trip
        </h1>
        <ButtonBasic
          content={
            <Image src={Pen} alt="start planning" className="h-28 w-28" />
          }
          onClickAction={handleScroll}
        />
      </div>
      <div
        className="h-screen w-full flex justify-start items-start  text-black"
        dir="rtl"
        ref={sectionRef}
      >
        <div className="flex flex-col justify-baseline p-8! items-start w-1/2 h-full  bg-amber-200/50">
          <div className="w-fit flex justify-between items-start h-10 gap-2">
            <label className="text-4xl font-bold h-full">
              چند روز قراره بمونی؟
            </label>
            <input type="number" className="bg-white! w-16 h-full p-0 m-0 " />
          </div>
          <hr className="text-black! bg-black! w-full h-2  my-2!" />
          <div className="flex-col flex gap-3">
            <p className="text-4xl font-bold h-full">لیست لوازم:</p>
            <div className="w-auto flex justify-between items-start h-10 gap-2">
              <input
                type="checkbox"
                className="bg-white! w-16 h-full p-0 m-0 focus:outline-none!"
              />
              <input
                type="text"
                dir="rtl"
                className=" w-auto h-full p-0 m-0 text-2xl! font-bold! border-b-2!  focus:border-b-2! focus:outline-none!   "
                defaultValue={"جوراب"}
              />
            </div>
            <div className="w-auto flex justify-between items-start h-10 gap-2">
              <input
                type="checkbox"
                className="bg-white! w-16 h-full p-0 m-0 focus:outline-none!"
              />
              <input
                type="text"
                dir="rtl"
                className=" w-auto h-full p-0 m-0 text-2xl! font-bold! border-b-2!  focus:border-b-2! focus:outline-none!   "
                defaultValue={"جوراب"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-baseline p-8! items-start w-1/2 h-full  bg-amber-200/50">
          <div className="w-fit flex justify-between items-start h-10 gap-2">
            <label className="text-4xl font-bold h-full">
              چند روز قراره بمونی؟
            </label>
            <input type="number" className="bg-white! w-16 h-full p-0 m-0 " />
          </div>
          <hr className="text-black! bg-black! w-full h-2  my-2!" />
          <div className="flex-col flex gap-3">
            <p className="text-4xl font-bold h-full">لیست لوازم:</p>
            <div className="w-auto flex justify-between items-start h-10 gap-2">
              <input
                type="checkbox"
                className="bg-white! w-16 h-full p-0 m-0 focus:outline-none!"
              />
              <input
                type="text"
                dir="rtl"
                className=" w-auto h-full p-0 m-0 text-2xl! font-bold! border-b-2!  focus:border-b-2! focus:outline-none!   "
                defaultValue={"جوراب"}
              />
            </div>
            <div className="w-auto flex justify-between items-start h-10 gap-2">
              <input
                type="checkbox"
                className="bg-white! w-16 h-full p-0 m-0 focus:outline-none!"
              />
              <input
                type="text"
                dir="rtl"
                className=" w-auto h-full p-0 m-0 text-2xl! font-bold! border-b-2!  focus:border-b-2! focus:outline-none!   "
                defaultValue={"جوراب"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
