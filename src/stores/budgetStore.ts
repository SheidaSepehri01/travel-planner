import { create } from "zustand";
import { BudgetStore, CostType } from "../types/budgettingTypes";
import { v4 as uuidv4 } from "uuid";
export const useBudgetStore = create<BudgetStore>((set) => ({
  items: [],
  costs: [],
  totalBudget: 0,
  totalCost: 0,
  rest: 0,
  setBudget: (budget: number) =>
    set((state) => ({ totalBudget: budget, rest: budget - state.totalCost })),
  updateCost: (cost: CostType) =>
    set((state) => {
      const prevCost = state.costs.find((c) => c.id === cost.id);
      if (prevCost) {
        return {
          costs: state.costs.map((c) => (c.id === cost.id ? cost : c)),
          totalCost: state.totalCost + (cost.amount - prevCost?.amount),
          rest:
            state.totalBudget -
            (state.totalCost + (cost.amount - prevCost?.amount)),
        };
      }
      return {
        costs: [...state.costs],
      };
    }),
  removeCost: (cost: CostType) =>
    set((state) => ({
      costs: state.costs.filter((c) => c.id !== cost.id),
      totalCost: state.costs.reduce((acc, cost) => acc + cost.amount, 0),
      rest:
        state.totalBudget -
        state.costs.reduce((acc, cost) => acc + cost.amount, 0),
    })),
  addCost: (cost: { amount: number; name: string }) =>
    set((state) => {
      const newCost = { ...cost, id: uuidv4() };
      return {
        costs: [...state.costs, newCost],
        totalCost: state.totalCost + newCost.amount,
        rest: state.totalBudget - (state.totalCost + newCost.amount),
      };
    }),
  reset: () => set({ costs: [], totalCost: 0, totalBudget: 0, rest: 0 }),
}));
