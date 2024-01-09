type MealType = {
  id: number;
  title: string;
  img: string;
  description: string;
  options: OptionType[];
  // option?: OptionType;

  // price?: number;
};

type OptionType = {
  id: number;
  price: number;
  size?: string;
};

type OrderType = {
  id: number;
  title: string;
  img: string;
  description: string;
  size?: string;
  price: number;
};

type BasketItemType = {
  quantity: number;
  // total: number;
} & OrderType;

export type { BasketItemType, MealType, OptionType, OrderType };
