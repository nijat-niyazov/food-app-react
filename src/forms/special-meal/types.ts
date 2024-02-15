type InputValue = { id: string; price: number; name: string };
type Price = { fieldName: string } & InputValue;

type FormInputValues = {
  size: string;
  ingredients: {
    meat: string;
    cheese: string[];
    vegitable: string[];
  };
  extras: { condiments: string[]; extras: string; souce: string[] };
  note: string;
};

export type { FormInputValues, InputValue, Price };
