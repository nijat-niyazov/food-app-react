import { create } from "zustand";

interface AuthState {
  email: string;
  password: string;
  submitForm: (data: { email: string; password: string }) => void;
}

export const useAuth = create<AuthState>()((set) => ({
  email: "",
  password: "",
  submitForm: ({ email, password }) => set({ email, password }),
}));

export const submitForm = useAuth.getState().submitForm;
