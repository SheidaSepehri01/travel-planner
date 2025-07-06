import axios from "axios";
import { create } from "zustand";
import { PlanData, UsePlansType } from "../types/usePlansType";
import { usePlanDaysStore } from "./planDays";
import { useBudgetStore } from "./budgetStore";
import { usePackingListStore } from "./packingListStore";
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const usePlans = create<UsePlansType>((set) => ({
  getPlansApiState: "idle",
  setPlanApiState: "idle",
  planList: null,
  getPlansErr: null,
  setPlansErr: null,
  setPlan: async () => {
    const { startDate, endDate, title, plan } = usePlanDaysStore.getState();
    const { totalBudget, costs } = useBudgetStore.getState();
    const { items } = usePackingListStore.getState();
    debugger;
    const sendData: PlanData = {
      title: title,
      startDate: startDate!,
      endDate: endDate!,
      budget: totalBudget,
      necessities: items,
      days: plan,
      costs: costs,
    };
    try {
      const res = await axios.post(
        `${baseURL}/plans/create`,
        {
          ...sendData,
        },
        { withCredentials: true }
      );
      if (res) {
        set({
          setPlanApiState: "success",
        });
      }
    } catch (err) {
      debugger;
      if (axios.isAxiosError(err)) {
        set({
          setPlansErr: err.response?.data.error.details || "An error occurred",
          setPlanApiState: "error",
        });
      } else {
        set({
          setPlansErr: "An error occurred",
          setPlanApiState: "error",
        });
      }
    }
  },
  getPlans: async () => {
    set({ getPlansApiState: "loading" });
    try {
      const response = await axios.get(
        `${baseURL}/plans/get`,

        {
          withCredentials: true,
        }
      );
      set({
        planList: response.data.data.plans,
        getPlansApiState: "success",
        getPlansErr: null,
      });
    } catch (err: unknown) {
      console.error("Get plans error:", err);
      if (axios.isAxiosError(err)) {
        set({
          getPlansErr: err.response?.data.message || "An error occurred",
          getPlansApiState: "error",
        });
      } else {
        set({
          getPlansErr: "An error occurred",
          getPlansApiState: "error",
        });
      }
    }
  },
}));
