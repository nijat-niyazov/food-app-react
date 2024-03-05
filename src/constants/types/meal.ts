type MealType = {
  id: number;
  title: string;
  img: string;
  description: string;
  options: OptionType[];
  category_name: string;
  category_id: string;

  // option?: OptionType;

  // price?: number;
};

type OptionType = {
  id: number;
  price: number;
  name: string;
};

type OrderType = {
  id: number;
  title: string;
  img: string;
  description: string;
  size?: string;
  price: number;
  note?: string;
};

type BasketItemType = {
  quantity: number;
  // total: number;
} & OrderType;

export type { BasketItemType, MealType, OptionType, OrderType };
