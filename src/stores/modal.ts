import { ReactNode } from "react";
import { create } from "zustand";

type contentType = JSX.Element | ReactNode | null;
interface ModalState {
  content: contentType;
  opened: boolean;
  closeBtn?: boolean;
  openModal: (content: contentType) => void;
  closeModal: () => void;
  hideCloseBtn: () => void;
}

const useModalStore = create<ModalState>()((set) => ({
  content: null,
  opened: false,
  closeBtn: true,
  openModal: (content: contentType) => set({ content, opened: true }),
  closeModal: () => set({ opened: false }),
  hideCloseBtn: () => set({ closeBtn: false }),
}));

export const openModal = useModalStore.getState().openModal;
export const closeModal = useModalStore.getState().closeModal;
export const hideCloseBtn = useModalStore.getState().closeModal;

export default useModalStore;
