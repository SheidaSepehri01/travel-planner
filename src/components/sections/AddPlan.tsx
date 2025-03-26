"use client";
import { BasicNecessities } from "../layouts/BasicNecessities";
import { BudgetPlanning } from "../layouts/BudgetPlanning";
import { DailyPlan } from "../layouts/DailyPlan";

export const AddPlan = () => {
  return (
    <div className="h-fit w-full bg-[url('/assets/images/texture.jpg')] bg-cover bg-center bg-y-repeat">
      <div
        className=" h-screen flex justify-start items-start  text-black "
        dir="rtl"
      >
        <BasicNecessities />
        <BudgetPlanning />
      </div>
      <DailyPlan />
    </div>
  );
};
