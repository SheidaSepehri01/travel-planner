import { create } from "zustand";
import {
  PackingListStoreType,
  PackingListType,
} from "../types/packingListType";
import { v4 as uuidv4 } from "uuid";

export const usePackingListStore = create<PackingListStoreType>((set) => ({
  items: [],
  addItems: (text: string) =>
    set((state) => ({
      items: [...state.items, { id: uuidv4(), text: text, done: false }],
    })),
  removeAllItems: () => set(() => ({ items: [] })),
  updateItem: (val: PackingListType) =>
    set((state) => ({
      items: state.items.map((item) => (item.id === val.id ? val : item)),
    })),
  removeItem: (id: string) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
