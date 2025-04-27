"use client";

import { cn } from "../../lib/utils";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
export const PreviousPlans = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Card
        className={cn(
          "h-[15em] w-[15em]  flex flex-col justify-center  border-2  text-black rounded-lg items-start p-4"
        )}
      >
        <CardHeader className="w-full">
          <CardTitle>italy</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between items-end">
          <p className="w-1/2 text-center">3 days</p>
          <p className="border-l-2 w-1/2 text-center border-gray-400 ">4500$</p>
        </CardFooter>
      </Card>
    </div>
  );
};
