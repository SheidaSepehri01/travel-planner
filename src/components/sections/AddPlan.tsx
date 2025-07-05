"use client";
import { useFormState } from "react-hook-form";
import { usePlanDaysStore } from "../../stores/planDays";
import { usePlans } from "../../stores/plans";
import { BasicNecessities } from "../layouts/BasicNecessities";
import { BudgetPlanning } from "../layouts/BudgetPlanning";
import { DailyPlan } from "../layouts/DailyPlan";
import HorizontalStepper from "../ui/HorrizontalStepper";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Button } from "../ui/button";
import { TripInfoForm } from "../layouts/TripInfoForm";

export const AddPlan = () => {
  const { setPlan } = usePlans();
  const [currentStep, setCurrentStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleNextForm = () =>
    setCurrentStep((prev) => (prev < 3 ? prev + 1 : 0));

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [currentStep]);
  console.log(currentStep);
  return (
    <div className="h-screen pt-14  w-full flex flex-col justify-between items-center ">
      <div className="w-full h-[10%] relative ">
        <HorizontalStepper
          currentStep={currentStep}
          steps={[
            { title: "where do you want to go" },
            { title: "packing list" },
            { title: "set your budget" },
            { title: "plan your days" },
          ]}
        />
      </div>
      <div className="w-full h-[80%] overflow-y-auto flex justify-center items-start">
        <div
          ref={containerRef}
          className="h-full w-full md:w-1/3 flex justify-center items-start   p-6  transition-all"
        >
          {currentStep === 0 && <TripInfoForm onSubmit={handleNextForm} />}
          {currentStep === 1 && <BasicNecessities onSubmit={handleNextForm} />}
          {currentStep === 2 && <BudgetPlanning onSubmit={handleNextForm} />}
          {currentStep === 3 && <DailyPlan handleSaveProject={setPlan} />}
        </div>
        {/* Navigation Buttons */}
      </div>
      <div className="flex justify-between h-[5%] w-1/2 items-center">
        <Button
          onClick={() => setCurrentStep((prev) => (prev > 0 ? prev - 1 : 3))}
          disabled={currentStep === 0}
          variant="outline"
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentStep((prev) => (prev < 3 ? prev + 1 : 0))}
          disabled={currentStep === currentStep - 1}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
