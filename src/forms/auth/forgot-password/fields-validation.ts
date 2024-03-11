export type LoginInputs = {
  email: string;
  password: string;
};

export const fields: { field: keyof LoginInputs; type: "email" | "password" | "text"; placeholder: string }[] = [
  {
    field: "email",
    type: "email",
    placeholder: "email@com",
  },
];
