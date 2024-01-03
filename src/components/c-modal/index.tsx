import { close } from "@/assets/images";
import { useModalStore } from "@/stores/";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const CustomModal = () => {
  const contentofModal = useModalStore((state) => state.content);
  const isOpen = useModalStore((state) => state.opened);
  const closeModal = useModalStore((state) => state.closeModal);
  const closeBtn = useModalStore((state) => state.closeBtn);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full relative  max-w-md transform  rounded-xl bg-white  text-left align-middle shadow-xl transition-all">
                {closeBtn && (
                  <button
                    onClick={closeModal}
                    className="bg-primary p-4 absolute rounded-full -right-3 top-0 md:translate-x-1/2  -translate-y-1/3"
                  >
                    <img src={close} alt="menu" className="w-8 h-8" />
                  </button>
                )}

                {contentofModal}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CustomModal;
