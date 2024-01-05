type MealType = {
  id: number;
  title: string;
  img: string;
  description: string;
  options?: OptionType[];
  price?: number;
};

type OptionType = {
  id: number;
  price: number;
  size: string;
};

type OrderType = {
  id: number;
  title: string;
  img: string;
  description: string;
  option?: OptionType;
  price?: number;
};

type BasketItemType = {
  quantity: number;
  // total: number;
} & OrderType;

export type { BasketItemType, MealType, OptionType, OrderType };
