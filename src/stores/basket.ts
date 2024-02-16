// import { OrderType as OrderWithoutQ } from "@/constants/types/meal";
// import { create } from "zustand";

// type OrderType = OrderWithoutQ & { quantity: number } & { note?: string };

// interface BasketState {
//   elements: OrderType[];
//   totalPrice: number;
//   totalItems: number;
//   addToBasket: (order: OrderWithoutQ) => void;
//   updateBasketItem: (id: number, action: "inc" | "dec") => void;
//   removeBasketItem: (id: number | string) => void;
//   clearBasket: () => void;
// }

// const findTotalPrice = (elements: OrderType[]) => elements.reduce((acc, order) => acc + order.price * order.quantity, 0).toFixed(2);

// const findTotalItems = (elements: OrderType[]) => elements.reduce((acc, order) => acc + order.quantity, 0);

// let elements: OrderType[] = [];
// let totalPrice: number = 0;
// let totalItems: number = 0;

// export const useBasketStore = create<BasketState>()((set) => ({
//   elements,
//   totalPrice,
//   totalItems,

//   addToBasket: (order: OrderWithoutQ) =>
//     set((state) => {
//       const newOrder = { ...order, quantity: 1 };

//       let doesExists = state.elements.find((meal) => meal.id === newOrder.id);

//       doesExists ? (doesExists.quantity += 1) : (elements = [...state.elements, newOrder]);

//       totalPrice = parseInt(findTotalPrice(elements));
//       totalItems = findTotalItems(elements);

//       return {
//         elements,
//         totalPrice,
//         totalItems,
//       };
//     }),

//   updateBasketItem: (id: number, action: "inc" | "dec") =>
//     set((state) => {
//       const findedOrder = state.elements.find((meal) => meal.id === id) as OrderType;

//       findedOrder.quantity += action === "inc" ? 1 : -1;
//       totalPrice = parseInt(findTotalPrice(elements));
//       totalItems = findTotalItems(elements);

//       return {
//         elements,
//         totalPrice,
//         totalItems,
//       };
//     }),

//   removeBasketItem: (id: number | string) =>
//     set((state) => {
//       elements = state.elements.filter((meal) => meal.id !== id);
//       totalPrice = parseInt(findTotalPrice(elements));
//       totalItems = findTotalItems(elements);

//       return {
//         elements,
//         totalPrice,
//         totalItems,
//       };
//     }),

//   clearBasket: () => set({ elements: [], totalPrice: 0 }),
// }));

// export const addToBasket = useBasketStore.getState().addToBasket;
// export const updateBasketItem = useBasketStore.getState().updateBasketItem;
// export const removeBasketItem = useBasketStore.getState().removeBasketItem;
// export const clearBasket = useBasketStore.getState().clearBasket;

import { OrderType as OrderWithoutQ } from "@/constants/types/meal";
import { create } from "zustand";

type OrderType = OrderWithoutQ & { quantity: number } & { note?: string };

interface BasketState {
  elements: OrderType[];
  totalPrice: number;
  totalItems: number;
  addToBasket: (order: OrderWithoutQ) => void;
  updateBasketItem: (id: number, action: "inc" | "dec") => void;
  removeBasketItem: (id: number | string) => void;
  clearBasket: () => void;
}

function getTotalPrice(elements: OrderType[]) {
  return parseFloat(elements.reduce((acc, order) => acc + order.price * order.quantity, 0).toFixed(2));
}

export const useBasketStore = create<BasketState>()((set, get) => ({
  elements: [],
  totalPrice: 0,
  totalItems: 0,

  // addToBasket: (order: OrderWithoutQ) => {
  //   const newOrder = { ...order, quantity: 1 };
  //   let elements = [...get().elements];

  //   const doesExists = elements.find((meal) => meal.id === newOrder.id);
  //   doesExists ? (doesExists.quantity += 1) : (elements = [...elements, newOrder]);

  //   set({ elements, totalPrice, totalItems });
  // },

  addToBasket: (order: OrderWithoutQ) =>
    set((state) => {
      const newOrder = { ...order, quantity: 1 };
      let elements = [...state.elements];

      const existed = elements.find((meal) => meal.id === newOrder.id);

      if (existed) existed.quantity += 1;
      else elements = [...elements, newOrder];

      const totalPrice = getTotalPrice(elements);
      const totalItems = get().elements.length;

      return { elements, totalPrice, totalItems };
    }),

  // totalPrice: () => {
  //   // get()
  //   //   .elements.reduce((acc, order) => acc + order.price * order.quantity, 0)
  //   //   .toFixed(2)
  //   const sound = get().totalItems;
  // },

  updateBasketItem: (id: number, action: "inc" | "dec") =>
    set((state) => {
      // const findedOrder = state.elements.find((meal) => meal.id === id) as OrderType;

      // findedOrder.quantity += action === "inc" ? 1 : -1;

      return {
        elements: state.elements,
      };
    }),

  removeBasketItem: (id: number | string) =>
    set((state) => {
      const elements = state.elements.filter((meal) => meal.id !== id);

      return {
        elements,
      };
    }),

  clearBasket: () => set({ elements: [], totalPrice: 0 }),
}));

export const addToBasket = useBasketStore.getState().addToBasket;
export const updateBasketItem = useBasketStore.getState().updateBasketItem;
export const removeBasketItem = useBasketStore.getState().removeBasketItem;
export const clearBasket = useBasketStore.getState().clearBasket;
export const totalPrice = useBasketStore.getState().totalPrice;
