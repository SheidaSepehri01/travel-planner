import { useBudgetStore } from "../../stores/budgetStore";
import plus from "../../assets/icons/add_circle.svg";
import Image from "next/image";
import { Line } from "../ui/Line";
import styles from "../../styles/modules/BudgetPlanning.module.css";
import { DeleteButton } from "../ui/DeleteButton";
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
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>برنامه ریزی بودجه</p>
      </div>
      <Line />
      <div className={styles.content}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>چقدر پول داری؟</label>
          <input
            type="number"
            className={styles.input}
            defaultValue={totalBudget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>
        <Line />
        <h6 className={styles.label}>هزینه ها</h6>
        {costs.map((cost) => (
          <div className={styles.costItem} key={cost.id}>
            <input
              className={styles.costInput}
              defaultValue={cost.name}
              placeholder="نام هزینه"
              onChange={(e) => updateCost({ ...cost, name: e.target.value })}
            />
            <input
              type="number"
              className={styles.input}
              value={cost.amount}
              onChange={(e) =>
                updateCost({ ...cost, amount: Number(e.target.value) })
              }
            />
            <DeleteButton onClick={() => removeCost(cost)} />
          </div>
        ))}
        <button
          onClick={() => addCost({ name: "", amount: 0 })}
          className={styles.addButton}
        >
          <Image src={plus} alt="add cost" className={styles.addIcon} />
          هزینه جدید
        </button>
        <Line />
        <div className={styles.inputGroup}>
          <label className={styles.label}>جمع کل هزینه ها:</label>
          <input
            type="number"
            className={styles.input}
            value={totalCost}
            readOnly
          />
        </div>
        <Line />
        <div className={styles.inputGroup}>
          <label className={styles.label}>باقی مانده:</label>
          <input type="number" className={styles.input} value={rest} readOnly />
        </div>
      </div>
    </div>
  );
};
