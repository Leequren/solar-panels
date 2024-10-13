import { backendRoutes, routes } from "@/const/routes";
import ky from "ky";
import { create } from "zustand";
import { apiUrl } from "@/const/backendUrl.ts";

export interface IPartConfiguration {
  [id_configuration: string]: {
    price: number;
    valueConfig: string;
    partId: number | null;
  };
}
export interface IPartProduct {
  id: number;
  name: string;
  images: string[];
  defaultPrice: number;
  partConfigurations: { [keyConfig: string]: IPartConfiguration };
}

export interface IProductInfoState {
  productInfo: IPartProduct | null;
  fetch: (idProductPart: number) => Promise<void>;
}
export const useProductInfoStore = create<IProductInfoState>((set) => ({
  productInfo: null,
  fetch: async (idProductPart: number) => {
    const reply = await ky
      .get(`${apiUrl}${backendRoutes.getPartInfo}?id=${idProductPart}`)
      .json<IPartProduct>();
    set({ productInfo: reply });
  },
}));
