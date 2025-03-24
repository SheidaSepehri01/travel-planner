import Image from "next/image";
import { Line } from "../ui/Line";
import { useState } from "react";
import clsx from "clsx";

export const DailyPlan = () => {
  const [showPlan, setShowPlan] = useState(true);
  return (
    <div className="w-full flex flex-col items-center gap-2 bg-[url('/assets/images/texture.jpg')] text-black h-screen bg-cover bg-center bg-no-repeat">
      <h1 className="text-4xl font-bold text-center">برنامه روزانه</h1>
      <Line />
      <div
        className={clsx(
          "flex flex-col w-[90%] duration-300 rounded-md overflow-hidden",
          showPlan ? "h-fit" : "h-10"
        )}
        dir="rtl"
      >
        <div className="flex justify-between items-center gap-4 p-3 bg-amber-900/40 w-full h-10">
          <h1 className="text-2xl font-bold "> روز اول</h1>
          <button onClick={() => setShowPlan(!showPlan)} className=" p-2 ">
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
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-2">
                <h2 className="text-lg font-bold">ظهر</h2>
                <textarea
                  className="w-full h-14 bg-amber-50/40 rounded-md p-2"
                  placeholder="موزه"
                />
              </div>
              <div className="flex flex-col justify-between items-start gap-2">
                <h2 className="text-lg font-bold">شب</h2>
                <textarea
                  className="w-full h-14 bg-amber-50/40 rounded-md p-2"
                  placeholder="رستوران"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
