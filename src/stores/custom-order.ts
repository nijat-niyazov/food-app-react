import { FormInputValues, Price } from "@/forms/special-meal/types";
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
  addToDraft: (data: CustomOrderType) => void;
  removeFromDraft: (id: string) => void;
}

// let orders: [];
// let totalPriceOfCustomOrders: number = 0;

const handlePrice = (orders: CustomOrderType[]) => orders.reduce((acc, order) => acc + order.price, 0);

export const useCustomOrderState = create<CustomOrderState>()((set) => ({
  orders: [],
  totalPriceOfCustomOrders: 0,

  addToDraft: (data: CustomOrderType) =>
    set((state) => {
      const doesExists = state.orders.find((order) => order.id === data.id);
      const orders = doesExists ? state.orders.map((order) => (order.id === data.id ? data : order)) : [...state.orders, data];
      const totalPriceOfCustomOrders = handlePrice(orders);
      return { orders, totalPriceOfCustomOrders };
    }),

  removeFromDraft: (id: string) => set((state) => ({ orders: state.orders.filter((order) => order.id !== id) })),
}));

export const addToDraft = useCustomOrderState.getState().addToDraft;
export const removeFromDraft = useCustomOrderState.getState().removeFromDraft;
export const totalPriceOfCustomOrders = useCustomOrderState.getState().totalPriceOfCustomOrders;
