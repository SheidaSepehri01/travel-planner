import { PlanDaysStoreType } from "../types/planDays";
import { create } from "zustand";
export const usePlanDaysStore = create<PlanDaysStoreType>((set) => ({
  title: "",
  startDate: "",
  endDate: "",
  plan: [],
  setPlan: (num: number) => {
    const plan = Array.from({ length: num }, (_, i) => ({
      day: i + 1,
      morning: "",
      afternoon: "",
      night: "",
    }));
    set(() => ({
      plan: plan,
    }));
  },
  updatePlan: (num, key, value) =>
    set((state) => ({
      plan: state.plan.map((item) =>
        item.day === num ? { ...item, [key]: value } : item
      ),
    })),
  setPlanTitle: (title: string) => set(() => ({ title })),
  setStartDate: (startDate: string) => set(() => ({ startDate })),
  setEndDate: (endDate: string) => set(() => ({ endDate })),
  resetPlan: () => set(() => ({ plan: [] })),
}));
