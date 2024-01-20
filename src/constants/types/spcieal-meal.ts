type Option = {
  name: string;
  id: string;
  img?: string; // Assuming img is a URL or path
  price?: number; // Price is optional for some options
};

type SizeType = {
  img: string; // Assuming img is a URL or path
  name: string;
  des: string;
  id: string;
  price: number;
};

type StepType = {
  heading: string;
  imgHeading?: string; // Assuming imgHeading is a URL or path
  type: "radio" | "checkbox";
  options: Option[];
};

export type { Option, SizeType, StepType };
