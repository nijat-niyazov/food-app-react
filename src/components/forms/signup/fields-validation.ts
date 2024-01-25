import { z } from "zod";

export const fields: { field: keyof SignUpInputs; type: "email" | "password" | "text"; placeholder: string }[] = [
  {
    field: "name",
    type: "text",
    placeholder: "Nijat",
  },
  {
    field: "lastName",
    type: "text",
    placeholder: "Niyazov",
  },
  {
    field: "email",
    type: "email",
    placeholder: "email@com",
  },
  {
    field: "password",
    type: "password",
    placeholder: "Password",
  },
];

export type SignUpInputs = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(3, { message: "At least 3 characters" })
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: "Name must start with an uppercase letter",
    }),
  lastName: z
    .string()
    .min(5, { message: "At least 5 characters" })
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: "Last name must start with an uppercase letter",
    }),
  email: z.string().email(),
  password: z
    .string()
    .min(3)
    .max(20)
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must contain at least one uppercase letter",
    })
    .refine((value) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?0-9]/.test(value), {
      message: "Password must contain at least one symbol",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "Password must contain at least one number",
    }),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
