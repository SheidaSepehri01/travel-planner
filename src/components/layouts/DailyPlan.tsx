import Image from "next/image";
import { Line } from "../ui/Line";
import { useState } from "react";
import clsx from "clsx";
import { OneDayPlanType } from "../../types/planDays";
import { usePlanDaysStore } from "../../stores/planDays";

export const DailyPlan = () => {
  const [showPlan, setShowPlan] = useState<number | null>(1);
  const { plan, updatePlan } = usePlanDaysStore();
  return (
    <div className="w-full flex flex-col items-center gap-2 bg-[url('/assets/images/texture.jpg')] text-black h-screen  bg-cover bg-center bg-no-repeat">
      <h1 className="text-4xl font-bold text-center">برنامه روزانه</h1>
      <Line />
      <div className="w-full h-screen overflow-y-auto">
        <div className="w-full h-fit flex flex-col items-center justify-center gap-2">
          {plan.map((item: OneDayPlanType) => (
            <div
              key={item.day}
              className={clsx(
                "flex flex-col w-[90%]  duration-300 rounded-md overflow-hidden",
                showPlan === item.day ? "h-fit" : "h-10"
              )}
              dir="rtl"
            >
              <div className="flex justify-between items-center gap-4 p-3 bg-amber-900/40 w-full h-10">
                <h1 className="text-2xl font-bold "> روز {item.day}</h1>
                <button
                  onClick={() =>
                    setShowPlan((prev) => (prev === item.day ? null : item.day))
                  }
                  className=" p-2 "
                >
                  <Image
                    src={"/assets/icons/down.svg"}
                    alt="add"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
              <div className="flex flex-col p-3  bg-amber-900/40 w-full h-fit">
                {showPlan && (
                  <>
                    <div className="flex flex-col justify-between items-start gap-2">
                      <h2 className="text-lg font-bold">صبح</h2>
                      <textarea
                        className="w-full h-14 bg-amber-50/40 rounded-md p-2"
                        placeholder="صبحانه"
                        defaultValue={item.morning}
                        onChange={(e) =>
                          updatePlan(item.day, "morning", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col justify-between items-start gap-2">
                      <h2 className="text-lg font-bold">ظهر</h2>
                      <textarea
                        className="w-full h-14 bg-amber-50/40 rounded-md p-2"
                        placeholder="موزه"
                        defaultValue={item.afternoon}
                        onChange={(e) =>
                          updatePlan(item.day, "afternoon", e.target.value)
                        }
                      />
                    </div>
                    <div className="flex flex-col justify-between items-start gap-2">
                      <h2 className="text-lg font-bold">شب</h2>
                      <textarea
                        className="w-full h-14 bg-amber-50/40 rounded-md p-2"
                        placeholder="رستوران"
                        defaultValue={item.night}
                        onChange={(e) =>
                          updatePlan(item.day, "night", e.target.value)
                        }
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
