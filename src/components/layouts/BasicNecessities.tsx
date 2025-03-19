"use client";
import React from "react";
import { usePackingListStore } from "../../stores/packingListStore";

export const BasicNecessities = () => {
  const { items, addItems, removeItem, updateItem } = usePackingListStore();
  return (
    <div className="flex flex-col justify-baseline p-8! items-start w-1/2 h-full  bg-amber-200/50">
      <div className="w-fit flex justify-between items-start h-10 gap-2">
        <label className="text-4xl font-bold h-full">
          چند روز قراره بمونی؟
        </label>
        <input type="number" className="bg-white! w-16 h-full p-0 m-0 " />
      </div>
      <hr className="text-black! bg-black! w-full h-2  my-2!" />
      <div className="flex-col flex gap-3">
        <p className="text-4xl font-bold h-full">لیست لوازم:</p>
        {items.map((item) => (
          <div
            key={item.id}
            className="w-auto flex justify-between items-start h-10 gap-2"
          >
            <input
              type="checkbox"
              className="bg-white! w-16 h-full p-0 m-0 focus:outline-none!"
              checked={item.done}
              onChange={(e) => updateItem({ ...item, done: e.target.checked })}
            />
            <input
              type="text"
              dir="rtl"
              className=" w-auto h-full p-0 m-0 text-2xl! font-bold! border-b-2!  focus:border-b-2! focus:outline-none!   "
              defaultValue={item.text}
              onChange={(e) => updateItem({ ...item, text: e.target.value })}
            />
            <button onClick={() => removeItem(item.id)}>حذف</button>
          </div>
        ))}
        <button onClick={() => addItems("جوراب")}>اضافه کردن</button>
      </div>
    </div>
  );
};
