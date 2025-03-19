export type PackingListType = {
  id: string;
  done: boolean;
  text: string;
};
export type PackingListStoreType = {
  items: PackingListType[];
  addItems: (text: string) => void;
  removeItem: (id: string) => void;
  updateItem: (item: PackingListType) => void;
};
