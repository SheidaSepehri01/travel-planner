import { CostType } from "./budgettingTypes";
import { PackingListType } from "./packingListType";
import { OneDayPlanType } from "./planDays";
import { ApiState } from "./utiles";

export type PlanData = {
  title: string;
  startDate: Date;
  endDate: Date;
  budget: number;
  necessities: PackingListType[];
  days: OneDayPlanType[];
  costs: CostType[];
};
export type UsePlansType = {
  getPlansApiState: ApiState;
  setPlanApiState: ApiState;
  planList: PlanData[] | null;
  error: string | null;
  setPlan: () => Promise<void>;
  getPlans: () => Promise<void>;
};
