"use client";
import React from "react";
import { usePackingListStore } from "../../stores/packingListStore";
import { Line } from "../ui/Line";
import { DeleteButton } from "../ui/DeleteButton";
import Image from "next/image";
import plus from "../../assets/icons/add_circle.svg";
import styles from "../../styles/modules/BasicNecessities.module.css";

export const BasicNecessities = () => {
  const { items, addItems, removeItem, updateItem } = usePackingListStore();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <label className={styles.title}>چند روز قراره بمونی؟</label>
        <input type="number" className={styles.checkbox} />
      </div>
      <Line />
      <p className={styles.listTitle}>لیست لوازم:</p>
      <div className={styles.content}>
        {items.map((item) => (
          <div key={item.id} className={styles.itemContainer}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={item.done}
              onChange={(e) => updateItem({ ...item, done: e.target.checked })}
            />
            <input
              type="text"
              className={styles.textInput}
              defaultValue={item.text}
              onChange={(e) => updateItem({ ...item, text: e.target.value })}
            />
            <DeleteButton onClick={() => removeItem(item.id)} />
          </div>
        ))}
        <button onClick={() => addItems("جوراب")} className={styles.addButton}>
          <Image src={plus} alt="add cost" className={styles.addIcon} />
          لوازم جدید
        </button>
      </div>
    </div>
  );
};
