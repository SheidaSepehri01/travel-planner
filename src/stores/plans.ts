import axios from "axios";
import { create } from "zustand";
import { PlanData, UsePlansType } from "../types/usePlansType";
import { usePlanDaysStore } from "./planDays";
import { useBudgetStore } from "./budgetStore";
import { usePackingListStore } from "./packingListStore";
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const usePlans = create<UsePlansType>((set) => ({
  ApiState: "idle",
  planList: null,
  error: null,
  setPlan: async () => {
    const { startDate, endDate, title, plan } = usePlanDaysStore.getState();
    const { totalBudget, costs } = useBudgetStore.getState();
    const { items } = usePackingListStore.getState();

    const sendData: PlanData = {
      title: title,
      startDate: "2025-05-30T12:34:56.789Z",
      endDate: "2025-05-30T12:34:56.789Z",
      budget: totalBudget,
      necessities: items,
      days: plan,
      costs: costs,
    };
    await axios.post(
      `${baseURL}/plans/create`,
      {
        ...sendData,
      },
      { withCredentials: true }
    );
  },
  getPlans: async () => {
    set({ ApiState: "loading" });
    try {
      const response = await axios.get(
        `${baseURL}/plans/get`,

        {
          withCredentials: true,
        }
      );
      set({ planList: response.data.data, ApiState: "success", error: null });
    } catch (err: unknown) {
      console.error("Get plans error:", err);
      if (axios.isAxiosError(err)) {
        set({
          error: err.response?.data.message || "An error occurred",
          ApiState: "error",
        });
      } else {
        set({
          error: "An error occurred",
          ApiState: "error",
        });
      }
    }
  },
}));
