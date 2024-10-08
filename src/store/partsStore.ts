import {apiUrl} from "@/const/backendUrl";
import {backendRoutes} from "@/const/routes";
import ky from "ky";
import {create} from "zustand";

export interface IParts {
  id: number;
  name: string;
  defaultPrice: number;
}

export interface IPartsState {
  parts: IParts[];
  fetch: () => Promise<void>;
}

export const usePartsStore = create<IPartsState>((set) => ({
  parts: [],
  fetch: async () => {
    const parts = await ky
      .get(`${apiUrl}${backendRoutes.getParts}`)
      .json<IParts[]>();
    set({parts: parts});
  },
}));
