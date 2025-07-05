import { PlanDaysStoreType } from "../types/planDays";
import { create } from "zustand";
export const usePlanDaysStore = create<PlanDaysStoreType>((set) => ({
  title: "",
  startDate: null,
  endDate: null,
  plan: [],
  setPlan: () => {
    set((state) => ({
      plan: Array.from(
        {
          length:
            state.startDate &&
            state.endDate &&
            state.endDate?.getDate() > state.startDate?.getDate()
              ? Math.floor(
                  state.endDate?.getDate() - state.startDate?.getDate()
                )
              : 0,
        },
        (_, i) => ({
          day: i + 1,
          morning: "",
          afternoon: "",
          night: "",
        })
      ),
    }));
  },
  updatePlan: (num, key, value) =>
    set((state) => ({
      plan: state.plan.map((item) =>
        item.day === num ? { ...item, [key]: value } : item
      ),
    })),
  setPlanTitle: (title: string) => set(() => ({ title })),
  setStartDate: (startDate: Date) => set(() => ({ startDate })),
  setEndDate: (endDate: Date) => set(() => ({ endDate })),
  resetPlan: () => set(() => ({ plan: [] })),
}));
