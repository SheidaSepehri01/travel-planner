import { useBudgetStore } from "../../stores/budgetStore";
import plus from "../../assets/icons/add_circle.svg";
import Image from "next/image";
import { Line } from "../ui/Line";
export const BudgetPlanning = () => {
  const {
    costs,
    totalCost,
    totalBudget,
    rest,
    setBudget,
    updateCost,
    removeCost,
    addCost,
  } = useBudgetStore();
  return (
    <div className="w-1/2 h-full bg-red-100 flex flex-col justify-center items-center">
      <div className="w-fit flex justify-between items-start h-10 gap-2">
        <p className="text-3xl font-bold h-full">برنامه ریزی بودجه</p>
      </div>
      <Line />
      <div className="w-full h-full flex flex-col justify-start items-center gap-2 mt-10">
        <div className="flex justify-center items-start w-full gap-2">
          <label className="text-2xl font-bold ">چقدر پول داری؟</label>
          <input
            type="number"
            className="bg-white! w-16 h-full p-0 m-0 "
            defaultValue={totalBudget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        {costs.map((cost) => (
          <div
            className="flex justify-center items-start w-full gap-2"
            key={cost.id}
          >
            <input
              className="text-2xl font-bold "
              defaultValue={cost.name}
              onChange={(e) => updateCost({ ...cost, name: e.target.value })}
            />
            <input
              type="number"
              className="bg-white! w-16 h-full p-0 m-0 "
              defaultValue={cost.amount}
              onChange={(e) =>
                updateCost({ ...cost, amount: Number(e.target.value) })
              }
            />
            <button onClick={() => removeCost(cost)}>حذف</button>
          </div>
        ))}
        <button
          onClick={() => addCost({ name: "", amount: 0 })}
          className="flex justify-between w-32 text-bold !text-2xl !border-2 border-brown-500 rounded-full p-2"
        >
          <Image src={plus} alt="add cost" className="w-6 h-6" />
          هزینه جدید
        </button>
        <Line />
        <div className="flex justify-center items-start w-full gap-2">
          <label className="text-2xl font-bold "> جمع کل هزینه ها:</label>
          <input
            type="number"
            className="bg-white! w-16 h-full p-0 m-0 "
            value={totalCost}
            readOnly
          />
        </div>
        <Line />
        <div className="flex justify-center items-start w-full gap-2">
          <label className="text-2xl font-bold ">باقی مانده:</label>
          <input
            type="number"
            className="bg-white! w-16 h-full p-0 m-0 "
            value={rest}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};
