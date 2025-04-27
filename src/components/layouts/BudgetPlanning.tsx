"use client";
import { useBudgetStore } from "../../stores/budgetStore";
import Image from "next/image";
import { Line } from "../ui/Line";
import styles from "../../styles/modules/BudgetPlanning.module.css";
import { DeleteButton } from "../ui/DeleteButton";
import { Input } from "../ui/input";
import clsx from "clsx";
import { useState } from "react";
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
  const [showList, setShowList] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className="w-full flex justify-start items-center gap-2"
        onClick={() => setShowList(!showList)}
      >
        <p className={styles.listTitle}>Budgeting</p>
        <Image
          src={"/assets/icons/down.svg"}
          alt={"down"}
          width={30}
          height={30}
          className={clsx(
            !showList && "-rotate-90",
            "duration-200 ease-in-out"
          )}
        />
      </div>
      <div
        className={clsx(
          "w-full p-4  flex justify-center items-center h-fit duration-200 ease-in-out",
          showList ? "h-80" : "h-1"
        )}
      >
        {showList && (
          <div
            className={clsx(
              styles.content,
              "p-4 max-h-[40em] h-fit overflow-auto bg-amber-200/50 backdrop-blur-lg rounded-lg border-2 border-green-950"
            )}
          >
            <div className={styles.inputGroup}>
              <label className={styles.label}> your budget</label>
              <Input
                type="number"
                defaultValue={totalBudget}
                className={styles.input}
                placeholder="budget"
                onChange={(e) => setBudget(Number(e.target.value))}
              />
            </div>
            <Line />
            {costs.map((cost) => (
              <div className={styles.costItem} key={cost.id}>
                <DeleteButton onClick={() => removeCost(cost)} />
                <Input
                  type="number"
                  className={styles.input}
                  value={cost.amount}
                  onChange={(e) =>
                    updateCost({ ...cost, amount: Number(e.target.value) })
                  }
                />
                <Input
                  className={styles.costInput}
                  defaultValue={cost.name}
                  placeholder="expense"
                  type="text"
                  onChange={(e) =>
                    updateCost({ ...cost, name: e.target.value })
                  }
                />
              </div>
            ))}
            <button
              onClick={() => addCost({ name: "", amount: 0 })}
              className={styles.addButton}
            >
              Add expense
              <Image
                src={"/assets/icons/add_circle.svg"}
                alt="add cost"
                className={styles.addIcon}
                width={100}
                height={100}
              />
            </button>
            <Line />
            <div className={styles.inputGroup}>
              <label className={styles.label}> Total cost:</label>
              <Input
                type="number"
                className={styles.input}
                value={totalCost}
                readOnly
              />
            </div>
            <Line />
            <div className={styles.inputGroup}>
              <label className={styles.label}>remained:</label>
              <input
                type="number"
                className={styles.input}
                value={rest}
                readOnly
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
