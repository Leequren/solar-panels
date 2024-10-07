import { apiUrl } from "@/const/backendUrl";
import { backendRoutes } from "@/const/routes";
import ky from "ky";
import { create } from "zustand";

export interface IFaq {
  id: number;
  title: string;
  answer: string;
}
export interface IFaqState {
  faqs: IFaq[];
  fetch: () => Promise<void>;
}
export const useFaqStore = create<IFaqState>((set) => ({
  faqs: [],
  fetch: async () => {
    const reply = await ky
      .get(`${apiUrl}${backendRoutes.getFaqs}`)
      .json<IFaq[]>();
    set({ faqs: reply });
  },
}));
