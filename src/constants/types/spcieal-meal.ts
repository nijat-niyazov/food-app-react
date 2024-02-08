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

type StepType = {
  title: string;
  imgTitle: string; // Assuming imgTitle is a URL or path
  type: "radio" | "checkbox";
  options: Option[];
};

type MealType = {
  categoryName: string;
  options?: Option[];
  sub_categories?: StepType[];
};

export type { MealType, Option, SizeType, StepType };
