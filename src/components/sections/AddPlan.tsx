"use client";
import { usePlanDaysStore } from "../../stores/planDays";
import { BasicNecessities } from "../layouts/BasicNecessities";
import { BudgetPlanning } from "../layouts/BudgetPlanning";
import { DailyPlan } from "../layouts/DailyPlan";
import { Input } from "../ui/input";
import { Line } from "../ui/Line";

export const AddPlan = () => {
  const { setPlan } = usePlanDaysStore();
  return (
    <div className="h-screen  w-full flex flex-col justify-center items-center ">
      <div className="md:w-2/3 w-full   h-[90%]  overflow-auto border border-amber-950 rounded-lg p-10  shadow-md ">
        <div className="w-full h-10 gap-2 flex justify-start items-center">
          <label className="text-2xl font-semibold">
            how many days is your trip?
          </label>
          <Input
            type="number"
            placeholder="days"
            onChange={(e) => setPlan(Number(e.target.value))}
            className="w-14 p-0 border-2 border-green-950 placeholder:text-green-800/30 placeholder:text-center"
          />
        </div>
        <Line />
        <div className="grid grid-rows-3 justify-items-center content-center"></div>
        <BasicNecessities />

        <BudgetPlanning />
        <DailyPlan />
      </div>
    </div>
  );
};
