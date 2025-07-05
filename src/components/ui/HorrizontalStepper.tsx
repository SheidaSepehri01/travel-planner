"use client";

import { cn } from "@/lib/utils";

type PropTypes = {
  currentStep?: number;
  next?: () => void;
  prev?: () => void;
  steps: { title: string }[];
};

export default function HorizontalStepper(props: PropTypes) {
  const { currentStep = 0, steps } = props;

  return (
    <div className="w-full   px-4">
      {/* Stepper */}
      <div className="flex items-center justify-between relative ">
        {steps.map((step, index) => (
          <div key={index} className="flex text-center relative w-full ">
            {index && (
              <div
                className={cn(
                  " z-10 absolute top-4 -left-1/2 w-full h-0.5 ",
                  currentStep >= index ? "bg-primary" : "bg-muted"
                )}
              />
            )}
            <div className="flex-1 text-center relative w-1/2 z-20 ">
              <div
                className={cn(
                  " w-8 h-8 mx-auto rounded-full border-2 flex items-center justify-center text-sm font-medium transition-colors",
                  currentStep >= index
                    ? "bg-primary  text-white border-primary"
                    : "border-muted text-muted-foreground bg-white"
                )}
              >
                {index + 1}
              </div>
              <div className="mt-2 text-sm text-neutral-950">{step.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
