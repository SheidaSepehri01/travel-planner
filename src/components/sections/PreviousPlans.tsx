"use client";

import { useEffect } from "react";
import { cn } from "../../lib/utils";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";
import { usePlans } from "../../stores/plans";
import Image from "next/image";
import { Button } from "../ui/button";
export const PreviousPlans = () => {
  const { getPlans, planList } = usePlans();
  useEffect(() => {
    getPlans();
  }, []);
  return (
    <div className="w-full flex flex-wrap justify-center items-start h-screen pt-16 gap-2">
      {planList?.map((plan, index) => {
        const startDate = new Date(plan.startDate).toDateString();
        const endDate = new Date(plan.endDate).toDateString();
        const firstDaySum =
          plan.days[0].morning.length > 35
            ? plan.days[0].morning.slice(35)
            : plan.days[0].morning;
        return (
          <Card
            className={cn(
              "h-[18em] w-[20em]  flex flex-col justify-evenly  border-2  text-black rounded-lg items-start p-4"
            )}
            key={index}
          >
            <CardHeader className="w-full flex justify-between items-center ">
              <CardTitle>{plan.title}</CardTitle>
              <div className="flex justify-around items-center w-1/3 gap-1">
                <Button variant={"ghost"} onClick={() => {}} size={"sm"}>
                  <Image
                    src="/assets/icons/pen.svg"
                    alt="edit"
                    width="20"
                    height="20"
                  />
                </Button>{" "}
                <Button variant={"ghost"} onClick={() => {}} size={"sm"}>
                  <Image
                    src="/assets/icons/delete.svg"
                    alt="edit"
                    width="20"
                    height="20"
                  />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="w-full grid grid-cols-1 justify-items-start content-start gap-2">
              <CardDescription className="w-full flex justify-center items-center">
                {firstDaySum}
              </CardDescription>
              <div className="w-full flex justify-center  items-end border-t-2 border-b-2 border-gray-400">
                <p className=" w-1/2 text-center  ">Total Costs</p>
                <p className="border-l-2 w-1/2 text-center border-gray-400 ">
                  Budget: {plan.budget}
                </p>
              </div>
            </CardContent>
            <CardFooter className="w-full ">
              <p className="w-full  text-sm text-left">
                {startDate} to {endDate}
              </p>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
