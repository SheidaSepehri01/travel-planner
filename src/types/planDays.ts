export type OneDayPlanType = {
  day: number;
  morning: string;
  afternoon: string;
  night: string;
};

export type PlanDaysStoreType = {
  plan: OneDayPlanType[] | [];
  title: string;
  startDate: string;
  endDate: string;
  updatePlan: (
    num: number,
    key: "morning" | "afternoon" | "night",
    value: string
  ) => void;
  setPlan: (plan: number) => void;
  resetPlan: () => void;
  setPlanTitle: (title: string) => void;
  setStartDate: (title: string) => void;
  setEndDate: (title: string) => void;
};
