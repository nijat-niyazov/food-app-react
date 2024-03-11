import { UserType } from "@/constants/types/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user: UserType | null;
  myUser: UserType | null;
  setUser: (newUser: UserType | null) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      myUser: null,
      user: null,
      setUser: (newUser: UserType | null) => set({ user: newUser }),
    }),
    {
      name: "user-storage",
    }
  )
);

export const setUser = useUserStore.getState().setUser;
