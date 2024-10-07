import {apiUrl} from "@/const/backendUrl";
import {backendRoutes} from "@/const/routes";
import ky from "ky";
import {create} from "zustand";

export interface ICatalogWorkstations {
  id: number;
  title: string;
  answer: string;
}

export interface ICatalogWorkstationsState {
  catalogWorkstations: ICatalogWorkstations[];
  fetch: () => Promise<void>;
}

export const useFaqStore = create<ICatalogWorkstationsState>((set) => ({
  catalogWorkstations: [],
  fetch: async () => {
    const catalogWorkstations = await ky
      .get(`${apiUrl}${backendRoutes.getFaqs}`)
      .json<ICatalogWorkstations[]>();
    set({catalogWorkstations: catalogWorkstations});
  },
}));
