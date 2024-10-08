import {apiUrl} from "@/const/backendUrl";
import {backendRoutes} from "@/const/routes";
import ky from "ky";
import {create} from "zustand";

export interface ICatalogWorkstations {
  id: number;
  name: string;
  defaultPrice: number;
}

export interface ICatalogWorkstationsState {
  catalogWorkstations: ICatalogWorkstations[];
  fetch: () => Promise<void>;
}

export const useCatalogWorkstationsStore = create<ICatalogWorkstationsState>((set) => ({
  catalogWorkstations: [],
  fetch: async () => {
    const catalogWorkstations = await ky
      .get(`${apiUrl}${backendRoutes.getCatalogWorkstations}`)
      .json<ICatalogWorkstations[]>();
    set({catalogWorkstations: catalogWorkstations});
  },
}));
