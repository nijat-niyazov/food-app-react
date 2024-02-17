import { FormInputValues, Price } from "@/forms/special-meal/types";
import { convertToTwoDecimalFloat } from "@/utils";
import { create } from "zustand";

export type CustomOrderType = {
  id: string;
  meal: string;
  order: FormInputValues;
  totalPrice: Price[];
  price: number;
};

interface CustomOrderState {
  orders: CustomOrderType[];
  totalPriceOfCustomOrders: number;
  addCustomOrderToBasket: (data: CustomOrderType) => void;
  removeCustomOrderFromBasket: (id: string) => void;
  clearCustomOrders: () => void;
}

function getTotalPrice(orders: CustomOrderType[]) {
  const price = orders.reduce((acc, order) => acc + order.price, 0);
  return convertToTwoDecimalFloat(price);
}

export const useCustomOrderState = create<CustomOrderState>()((set) => ({
  orders: [],
  totalPriceOfCustomOrders: 0,

  addCustomOrderToBasket: (data: CustomOrderType) =>
    set((state) => {
      const doesExists = state.orders.find((order) => order.id === data.id);
      const orders = doesExists ? state.orders.map((order) => (order.id === data.id ? data : order)) : [...state.orders, data];
      const totalPriceOfCustomOrders = getTotalPrice(orders);
      return { orders, totalPriceOfCustomOrders };
    }),

  removeCustomOrderFromBasket: (id: string) => set((state) => ({ orders: state.orders.filter((order) => order.id !== id) })),
  clearCustomOrders: () => set({ orders: [], totalPriceOfCustomOrders: 0 }),
}));

export const addCustomOrderToBasket = useCustomOrderState.getState().addCustomOrderToBasket;
export const clearCustomOrder = useCustomOrderState.getState().clearCustomOrders;
export const removeCustomOrderFromBasket = useCustomOrderState.getState().removeCustomOrderFromBasket;
