import { PlanDaysStoreType } from "../types/planDays";
import { create } from "zustand";
export const usePlanDaysStore = create<PlanDaysStoreType>((set) => ({
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
  resetPlan: () => set(() => ({ plan: [] })),
}));
