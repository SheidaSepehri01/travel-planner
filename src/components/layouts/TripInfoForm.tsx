"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { usePlanDaysStore } from "../../stores/planDays";
import { SubmitBtn } from "../ui/SubmitBtn";

export type TripInfo = {
  title: string;
  startDate: Date | null;
  endDate: Date | null;
};

type Props = {
  onSubmit: () => void;
};

export const TripInfoForm = ({ onSubmit }: Props) => {
  const {
    setPlanTitle,
    endDate,
    setEndDate,
    setStartDate,
    title,
    startDate,
    setPlan,
  } = usePlanDaysStore();

  return (
    <div
      className="w-full mx-auto min-h-1/2  bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-md space-y-6 flex justify-between items-center flex-col"
      dir="rtl"
    >
      <h1 className="text-2xl font-bold text-center text-amber-900">
        start planning your trip
      </h1>
      <div className="space-y-4 w-full">
        <div>
          <label className="text-sm font-medium text-amber-900">title</label>
          <Input
            type="text"
            placeholder="trip to Italy"
            value={title || ""}
            onChange={(e) => setPlanTitle(e.target.value)}
            className="mt-1 bg-white/80 border border-amber-300"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-sm font-medium text-amber-900">
              start date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-white/80 border border-amber-300"
                >
                  <CalendarIcon className="ml-2 h-4 w-4 text-amber-500" />
                  {startDate ? format(startDate, "yyyy-MM-dd") : " chose"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  required={true}
                  selected={startDate ?? undefined}
                  onSelect={(date: Date | undefined) => {
                    if (date) {
                      setStartDate(date);
                    }
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex-1">
            <label className="text-sm font-medium text-amber-900">
              end date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal bg-white/80 border border-amber-300"
                >
                  <CalendarIcon className="ml-2 h-4 w-4 text-amber-500" />
                  {endDate ? format(endDate, "yyyy-MM-dd") : " chose"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate ?? undefined}
                  required={true}
                  onSelect={(date: Date) => {
                    if (date) {
                      setEndDate(date);
                    }
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <SubmitBtn
        disabled={!title || !startDate || !endDate}
        title="continue"
        onSubmit={() => {
          onSubmit();
          setPlan();
        }}
      />
    </div>
  );
};
