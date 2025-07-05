"use client";

import { useEffect } from "react";
import { cn } from "../../lib/utils";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { usePlans } from "../../stores/plans";
export const PreviousPlans = () => {
  const { getPlans, planList } = usePlans();
  useEffect(() => {
    getPlans();
  }, []);
  console.log("planList", planList);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {planList?.map((plan, index) => (
        <Card
          className={cn(
            "h-[15em] w-[15em]  flex flex-col justify-center  border-2  text-black rounded-lg items-start p-4"
          )}
          key={index}
        >
          <CardHeader className="w-full">
            <CardTitle>{plan.title}</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardFooter className="w-full flex justify-between items-end">
            <p className="w-1/2 text-center">{plan.startDate}</p>
            <p className="border-l-2 w-1/2 text-center border-gray-400 ">
              {plan.budget} $
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
