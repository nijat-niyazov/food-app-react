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
  totalItemsCustomOrders: number;
  addCustomOrderToBasket: (data: CustomOrderType) => void;
  removeCustomOrderFromBasket: (id: string) => void;
  clearCustomOrders: () => void;
}

function getTotalPrice(orders: CustomOrderType[]) {
  const price = orders.reduce((acc, order) => acc + order.price, 0);
  return convertToTwoDecimalFloat(price);
}

export const useCustomOrderState = create<CustomOrderState>()((set, get) => ({
  orders: [],
  totalPriceOfCustomOrders: 0,
  totalItemsCustomOrders: 0,

  addCustomOrderToBasket: (data: CustomOrderType) =>
    set((state) => {
      const doesExists = state.orders.find((order) => order.id === data.id);
      const orders = doesExists ? state.orders.map((order) => (order.id === data.id ? data : order)) : [...state.orders, data];
      const totalPriceOfCustomOrders = getTotalPrice(orders);
      const totalItemsCustomOrders = orders.length;
      return { orders, totalPriceOfCustomOrders, totalItemsCustomOrders };
    }),

  removeCustomOrderFromBasket: (id: string) =>
    set((state) => {
      const orders = state.orders.filter((order) => order.id !== id);
      const totalPriceOfCustomOrders = getTotalPrice(orders);
      const totalItemsCustomOrders = state.orders.length;

      return { orders, totalItemsCustomOrders, totalPriceOfCustomOrders };
    }),
  clearCustomOrders: () => set({ orders: [], totalPriceOfCustomOrders: 0 }),
}));

export const addCustomOrderToBasket = useCustomOrderState.getState().addCustomOrderToBasket;
export const clearCustomOrder = useCustomOrderState.getState().clearCustomOrders;
export const removeCustomOrderFromBasket = useCustomOrderState.getState().removeCustomOrderFromBasket;
