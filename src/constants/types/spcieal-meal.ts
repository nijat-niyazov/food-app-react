type Option = {
  img?: string; // Assuming img is a URL or path
  name: string;
  des?: string;
  id: string;
  price: number; // Price is optional for some option
};

type SizeType = {
  img: string; // Assuming img is a URL or path
  name: string;
  des: string;
  id: string;
  price: number;
};

type ChoicesType = {
  title: string;
  imgTitle: string; // Assuming imgTitle is a URL or path
  type: "radio" | "checkbox";
  options: Option[];
};

type SpecialMealType = {
  categoryName: string;

  options?: Option[];

  sub_categories?: ChoicesType[];
};

export type { ChoicesType, Option, SizeType, SpecialMealType };
