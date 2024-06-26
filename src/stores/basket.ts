import { OrderType as OrderWithoutQ } from "@/constants/types/meal";
import { convertToTwoDecimalFloat } from "@/utils";
import { create } from "zustand";

type OrderType = OrderWithoutQ & { quantity: number } & { note?: string };

interface BasketState {
  orders: OrderType[];
  totalPrice: number;
  totalItems: number;
  addToBasket: (order: OrderWithoutQ) => void;
  updateBasketItem: (id: number, action: "inc" | "dec") => void;
  removeBasketItem: (id: number | string) => void;
  clearBasket: () => void;
}

function getTotalPrice(orders: OrderType[]) {
  const price = orders.reduce((acc, order) => acc + order.price * order.quantity, 0);
  return convertToTwoDecimalFloat(price);
}

function getTotalQuantity(orders: OrderType[]) {
  const price = orders.reduce((acc, order) => acc + order.quantity, 0);
  return convertToTwoDecimalFloat(price);
}

export const useBasketStore = create<BasketState>()(
  // persist(
  (set, get) => ({
    orders: [],
    totalPrice: 0,
    totalItems: 0,

    addToBasket: (order: OrderWithoutQ) =>
      set((state) => {
        const newOrder = { ...order, quantity: 1 };
        let orders = [...state.orders];

        const existed = orders.find((meal) => meal.id === newOrder.id);

        if (existed) existed.quantity += 1;
        else orders = [...orders, newOrder];

        const totalPrice = getTotalPrice(orders);
        const totalItems = getTotalQuantity(orders);

        return { orders, totalPrice, totalItems };
      }),

    updateBasketItem: (id: number, action: "inc" | "dec") =>
      set((state) => {
        // const findedOrder = state.orders.find((meal) => meal.id === id) as OrderType;

        // findedOrder.quantity += action === "inc" ? 1 : -1;

        return { orders: state.orders };
      }),

    removeBasketItem: (id: number | string) =>
      set((state) => {
        const orders = state.orders.filter((meal) => meal.id !== id);

        return { orders };
      }),

    clearBasket: () => set({ orders: [], totalPrice: 0 }),
  })
  //   {
  //     name: "basket-storage",
  //   }
  // )
);

export const addToBasket = useBasketStore.getState().addToBasket;
export const updateBasketItem = useBasketStore.getState().updateBasketItem;
export const removeBasketItem = useBasketStore.getState().removeBasketItem;
export const clearBasket = useBasketStore.getState().clearBasket;
