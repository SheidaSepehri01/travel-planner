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
    set((state) => ({
      costs: state.costs.map((c) => (c.id === cost.id ? cost : c)),
      totalCost: state.totalCost + cost.amount,
      rest: state.totalBudget - state.totalCost,
    })),
  removeCost: (cost: CostType) =>
    set((state) => ({
      costs: state.costs.filter((c) => c.name !== cost.name),
      totalCost: state.totalCost - cost.amount,
      rest: state.totalBudget - state.totalCost,
    })),
  addCost: (cost: { amount: number; name: string }) =>
    set((state) => {
      const newCost = { ...cost, id: uuidv4() };
      return {
        costs: [...state.costs, newCost],
        totalCost: state.totalCost + cost.amount,
        rest: state.totalBudget - state.totalCost,
      };
    }),
  reset: () => set({ costs: [], totalCost: 0, totalBudget: 0, rest: 0 }),
}));
