export type BudgetStore = {
  costs: CostType[] | [];
  totalBudget: number;
  totalCost: number;
  rest: number;
  updateCost: (cost: CostType) => void;
  removeCost: (cost: CostType) => void;
  addCost: (cost: { amount: number; name: string }) => void;
  setBudget: (budget: number) => void;
  reset: () => void;
};

export type CostType = {
  id: string;
  name: string;
  amount: number;
};
