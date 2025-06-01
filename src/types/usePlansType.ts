import { CostType } from "./budgettingTypes";
import { PackingListType } from "./packingListType";
import { OneDayPlanType } from "./planDays";
import { ApiState } from "./utiles";

export type PlanData = {
  title: string;
  startDate: string;
  endDate: string;
  budget: number;
  necessities: PackingListType[];
  days: OneDayPlanType[];
  costs: CostType[];
};
export type UsePlansType = {
  ApiState: ApiState;
  planList: PlanData[] | null;
  error: string | null;
  setPlan: () => Promise<void>;
  getPlans: () => Promise<void>;
};
