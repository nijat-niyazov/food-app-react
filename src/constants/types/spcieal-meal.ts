type Choices = {
  name: string;
  id: string;
  img?: string; // Assuming img is a URL or path
  price?: number; // Price is choicesal for some choices
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
  choices: Choices[];
};

export type { Choices, SizeType, StepType };
