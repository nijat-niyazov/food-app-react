import { create } from "zustand";

type orderType = any[];

interface BasketState {
  elements: any[];

  addToBasket: (order: orderType) => void;
  clearBasket: () => void;
}

const useBasketStore = create<BasketState>()((set) => ({
  elements: [],

  addToBasket: (order: orderType) =>
    set((state) => ({
      elements: [...state.elements, order],
    })),
  clearBasket: () => set({ elements: [] }),
}));

export const addToBasket = useBasketStore.getState().addToBasket;
export const clearBasket = useBasketStore.getState().clearBasket;

export default useBasketStore;
