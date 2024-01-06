import { OrderType as OrderWithoutQ } from "@/constants/types";
import { create } from "zustand";

type OrderType = OrderWithoutQ & { quantity: number };
interface BasketState {
  elements: OrderType[];
  totalPrice: number;
  totalItems: number;
  addToBasket: (order: OrderWithoutQ) => void;
  updateBasketItem: (id: number, action: "inc" | "dec") => void;
  removeBasketItem: (id: number) => void;
  clearBasket: () => void;
}

const findTotalPrice = (elements: OrderType[]) =>
  elements.reduce(
    (acc, order) =>
      acc + (order.price ?? order.option?.price!) * order.quantity,
    0
  );
const findTotalItems = (elements: OrderType[]) =>
  elements.reduce((acc, order) => acc + order.quantity, 0);

let elements: OrderType[] = [];
let totalPrice: number = 0;
let totalItems: number = 0;

const useBasketStore = create<BasketState>()((set) => ({
  elements,
  totalPrice,
  totalItems,

  addToBasket: (order: OrderWithoutQ) =>
    set((state) => {
      const newOrder = { ...order, quantity: 1 };

      let existingOrder = state.elements.find(
        (meal) => meal.id === newOrder.id
      );

      existingOrder
        ? (existingOrder.quantity += 1)
        : (elements = [...state.elements, newOrder]);

      totalPrice = findTotalPrice(elements);
      totalItems = findTotalItems(elements);

      return {
        elements,
        totalPrice,
        totalItems,
      };
    }),

  updateBasketItem: (id: number, action: "inc" | "dec") =>
    set((state) => {
      const findedOrder = state.elements.find(
        (meal) => meal.id === id
      ) as OrderType;

      findedOrder.quantity += action === "inc" ? 1 : -1;
      totalPrice = findTotalPrice(elements);
      totalItems = findTotalItems(elements);

      return {
        elements,
        totalPrice,
        totalItems,
      };
    }),

  removeBasketItem: (id: number) =>
    set((state) => {
      elements = state.elements.filter((meal) => meal.id !== id);
      totalPrice = findTotalPrice(elements);
      totalItems = findTotalItems(elements);

      return {
        elements,
        totalPrice,
        totalItems,
      };
    }),

  clearBasket: () => set({ elements: [], totalPrice: 0 }),
}));

export const addToBasket = useBasketStore.getState().addToBasket;
export const updateBasketItem = useBasketStore.getState().updateBasketItem;
export const removeBasketItem = useBasketStore.getState().removeBasketItem;
export const clearBasket = useBasketStore.getState().clearBasket;

export default useBasketStore;