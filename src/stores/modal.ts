import { ReactNode } from "react";
import { create } from "zustand";

type contentType = JSX.Element | ReactNode | null;
interface ModalState {
  content: contentType;
  opened: boolean;
  modalWidth: number | undefined;
  closeBtn?: boolean;
  openModal: (content: contentType, modalWidth?: number) => void;
  closeModal: () => void;
  hideCloseBtn: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  content: null,
  opened: false,
  modalWidth: undefined,
  closeBtn: true,
  openModal: (content: contentType, modalWidth?: number) => set({ content, modalWidth, opened: true }),
  closeModal: () => set({ opened: false }),
  hideCloseBtn: () => set({ closeBtn: false }),
}));

export const openModal = useModalStore.getState().openModal;
export const closeModal = useModalStore.getState().closeModal;
export const hideCloseBtn = useModalStore.getState().closeModal;
