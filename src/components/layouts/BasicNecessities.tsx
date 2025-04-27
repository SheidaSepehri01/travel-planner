"use client";
import React, { useState } from "react";
import { usePackingListStore } from "../../stores/packingListStore";
import { DeleteButton } from "../ui/DeleteButton";
import Image from "next/image";
import styles from "../../styles/modules/BasicNecessities.module.css";
import clsx from "clsx";

export const BasicNecessities = () => {
  const { items, addItems, removeItem, updateItem } = usePackingListStore();
  const [showList, setShowList] = useState(false);
  return (
    <div className={styles.container}>
      <div
        className="flex justify-start items-center gap-2"
        onClick={() => setShowList(!showList)}
      >
        <p className={styles.listTitle}>Packing list</p>
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
          styles.content,
          showList ? "h-80" : "h-1",
          "duration-200 ease-in-out "
        )}
      >
        {showList && (
          <div className="bg-amber-200/30 backdrop-blur-md rounded-lg w-full max-h-80 h-fit border-2 border-green-900">
            {items.map((item) => (
              <div key={item.id} className={styles.itemContainer}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={item.done}
                  onChange={(e) =>
                    updateItem({ ...item, done: e.target.checked })
                  }
                />

                <input
                  type="text"
                  className={styles.textInput}
                  defaultValue={item.text}
                  onChange={(e) =>
                    updateItem({ ...item, text: e.target.value })
                  }
                />
                <DeleteButton onClick={() => removeItem(item.id)} />
              </div>
            ))}
            <button
              onClick={() => addItems("جوراب")}
              className={styles.addButton}
            >
              <Image
                src={"/assets/icons/add_circle.svg"}
                alt="add cost"
                className={styles.addIcon}
                width={100}
                height={100}
              />
              لوازم جدید
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
