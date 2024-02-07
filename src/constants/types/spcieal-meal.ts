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
  heading: string;
  imgHeading: string; // Assuming imgHeading is a URL or path
  type: "radio" | "checkbox";
  options: Option[];
};

export type { Option, SizeType, StepType };
