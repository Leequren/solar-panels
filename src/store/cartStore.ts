import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IPartConfig {
  name: string;
  price: number;
  selection: string;
}

export interface ICartPart {
  defaultPrice: number;
  name: string;
  imgSrc: string;
  config: { [cfgKey: string]: IPartConfig } | null;
  count: number;
}

interface ICartPartInsert extends Omit<ICartPart, "count"> {
  idPart: number;
}

interface ICartState {
  parts: { [partKey: string]: ICartPart } | null;
  totalSum: number;
  count: number;
  addFirstPart: (part: ICartPartInsert) => void;
  incementCountPart: (id: number) => void;
  decrementCountPart: (id: number) => void;
  reduceSum: () => void;
}

// Обратите внимание на изменение в вызове create<ICartState>()
export const useCartStore = create<ICartState>()(
  persist(
    (set, get) => ({
      parts: null,
      totalSum: 0,
      count: 0,
      addFirstPart: (part) => {
        let parts = get().parts;
        if (!parts) parts = {};

        parts[part.idPart] = { count: 1, ...part };
        console.log(parts);
        set({ parts: parts });
        get().reduceSum();
      },
      incementCountPart: (id) => {
        const parts = get().parts;
        if (!parts) return;

        if (parts[id]) {
          ++parts[id].count;
        }

        set({ parts: parts });
        get().reduceSum();
      },
      decrementCountPart: (id: number) => {
        const parts = get().parts;
        if (!parts) return;
        if (parts[id] && parts[id].count > 0) {
          parts[id].count -= 1;
          if (parts[id].count === 0) delete parts[id];
        }
        set({ parts: parts });
        get().reduceSum();
      },
      reduceSum: () => {
        let sum = 0;
        const parts = get().parts;
        if (parts) {
          for (const key in parts) {
            sum += parts[key].count * parts[key].defaultPrice;
          }
        }

        const partsItems = Object.keys(
          get().parts as { [partKey: string]: ICartPart }
        ).length;
        set({ totalSum: sum, count: partsItems });
      },
    }),
    { name: "cart" }
  )
);
