import { create } from "zustand";

export interface ICookieStoreState {
  isCookieAccepted: boolean;
  acceptCookies: () => void;
}

export const useCookieBannerStore = create<ICookieStoreState>((set) => ({
  isCookieAccepted: localStorage.getItem("cookiesAccepted") === "true", // Чтение из localStorage
  acceptCookies: () => {
    set({ isCookieAccepted: true });
    localStorage.setItem("cookiesAccepted", "true"); // Запись в localStorage
  },
}));
