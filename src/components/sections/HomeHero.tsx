"use client";
import Pen from "@/assets/icons/pen.svg";
import Image from "next/image";
import { ButtonBasic } from "../ui/ButtonBasic";
import { useRef } from "react";
import { BasicNecessities } from "../layouts/BasicNecessities";
import { BudgetPlanning } from "../layouts/BudgetPlanning";
import { HeroBackground } from "../layouts/HeroBackground";
import { VerticalPagination } from "../layouts/VerticalPagination";
export const HomeHero = () => {
  const sectionRef = useRef<null | HTMLDivElement>(null);
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full p-0 m-0 h-fit flex flex-col justify-center ">
      <div className="h-screen w-full flex  justify-center items-center ">
        <HeroBackground />
        <div className=" w-full h-full z-50 flex flex-col justify-center items-center">
          <h1
            className="w-full z-50 h-fit font-extrabold font-sans text-black tracking-tighter"
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
      </div>
      <div
        className="h-screen w-full flex justify-start items-start  text-black"
        dir="rtl"
        ref={sectionRef}
      >
        <BasicNecessities />
        <BudgetPlanning />
        <VerticalPagination activeIndex={1} count={4} onClick={() => {}} />
      </div>
    </div>
  );
};
