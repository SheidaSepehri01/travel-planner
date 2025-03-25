export type OneDayPlanType = {
  day: number;
  morning: string;
  afternoon: string;
  night: string;
};

export type PlanDaysStoreType = {
  plan: OneDayPlanType[] | [];
  updatePlan: (
    num: number,
    key: "morning" | "afternoon" | "night",
    value: string
  ) => void;
  setPlan: (plan: number) => void;
  resetPlan: () => void;
};
