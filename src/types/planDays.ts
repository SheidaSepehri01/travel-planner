export type OneDayPlanType = {
  day: number;
  morning: string;
  afternoon: string;
  night: string;
};

export type PlanDaysStoreType = {
  plan: OneDayPlanType[] | [];
  title: string;
  startDate: Date | null;
  endDate: Date | null;
  updatePlan: (num: number, key: string, value: string) => void;
  setPlan: () => void;
  resetPlan: () => void;
  setPlanTitle: (title: string) => void;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
};
