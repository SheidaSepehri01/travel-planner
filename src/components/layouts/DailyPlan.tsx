"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { OneDayPlanType } from "../../types/planDays";
import { usePlanDaysStore } from "../../stores/planDays";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown } from "lucide-react";
import { usePlans } from "../../stores/plans";
import { ButtonStylish } from "../ui/ButtonStylish";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alart";
export const DailyPlan = () => {
  const [showPlan, setShowPlan] = useState<number | null>(1);
  const { plan, updatePlan } = usePlanDaysStore();
  const { setPlan, setPlanApiState, setPlansErr } = usePlans();
  return (
    <div className="flex flex-col min-h-1/2 max-h-full items-center w-full gap-6 p-4 text-black bg-amber-50/30 backdrop-blur-md rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-amber-900">
        daily plan
      </h1>

      <div className="w-full h-full overflow-y-auto space-y-4">
        {plan.map((item: OneDayPlanType) => {
          const isOpen = showPlan === item.day;

          return (
            <div
              key={item.day}
              className="rounded-xl bg-white/60 border border-amber-300 backdrop-blur p-4 shadow-sm transition-all duration-300"
              dir="rtl"
            >
              <button
                onClick={() => setShowPlan(isOpen ? null : item.day)}
                className="flex justify-between items-center w-full cursor-pointer"
              >
                <h2 className="text-xl font-semibold text-amber-900">
                  day {item.day}
                </h2>
                <ChevronDown
                  className={clsx("transition-transform duration-300", {
                    "rotate-180": isOpen,
                  })}
                />
              </button>

              {isOpen && (
                <div className="mt-4 space-y-4">
                  {[
                    {
                      label: "morning",
                      field: "morning",
                      placeholder: "plan for the morning",
                    },
                    {
                      label: "afternoon",
                      field: "afternoon",
                      placeholder: "plan for the afternoon",
                    },
                    {
                      label: "night",
                      field: "night",
                      placeholder: "plan for the night",
                    },
                  ].map(({ label, field, placeholder }) => (
                    <div key={field}>
                      <label className="text-sm font-medium text-amber-800">
                        {label}
                      </label>
                      <Textarea
                        placeholder={placeholder}
                        defaultValue={
                          item[field as keyof OneDayPlanType] as string
                        }
                        onChange={(e) =>
                          updatePlan(item.day, field, e.target.value)
                        }
                        className="bg-white/70 border border-amber-200 focus:ring-amber-400"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        className={clsx(
          "flex flex-col sm:flex-row items-center gap-2 justify-center w-full max-w-md p-4",
          plan.length ? "visible" : "hidden"
        )}
        dir="rtl"
      ></div>
      <ButtonStylish action={setPlan}>
        {setPlanApiState === "loading" ? (
          <Image
            src={"/assets/icons/load.svg"}
            alt="loading"
            className="animate-spin"
            width={20}
            height={20}
          />
        ) : (
          "create plan"
        )}{" "}
      </ButtonStylish>
      <Alert variant="default | destructive">
        <Terminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
};
