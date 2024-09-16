import { create } from 'zustand';

export const usePageStore = create((set) => ({
  currentTranslation: 0,
  transChanged: false,
  transShown: true,
  setTransShown: (shown) => set({ transShown: shown }),
  setTranslation: (prevTranslation, translation) =>
    set({ transChanged: prevTranslation, currentTranslation: translation }),
}));
