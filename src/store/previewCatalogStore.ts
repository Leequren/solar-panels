import {apiUrl} from "@/const/backendUrl";
import {backendRoutes} from "@/const/routes";
import ky from "ky";
import {create} from "zustand";

export interface IPreviewCatalog {
  id: number;
  description: string;
  defaultPrice: number;
}

export interface IPreviewCatalogState {
  previewCatalog: IPreviewCatalog[];
  fetch: () => Promise<void>;
}

export const usePreviewCatalogStore = create<IPreviewCatalogState>((set) => ({
  previewCatalog: [],
  fetch: async () => {
    const previewCatalog = await ky
      .get(`${apiUrl}${backendRoutes.getPreviewCatalogWorkstations}`)
      .json<IPreviewCatalog[]>();
    set({previewCatalog: previewCatalog});
  },
}));