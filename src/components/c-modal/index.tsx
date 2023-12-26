import { ArrowDown } from "@//assets/icons";
import { close, menu_book } from "@//assets/images";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const CustomModal = ({
  isOpen,
  closeModal,
  // children,
  closeBtn = true,
}: {
  isOpen: boolean;
  closeBtn?: boolean;
  closeModal: () => void;
  // children?: React.ReactNode;
}) => {
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
                    className="bg-primary p-4 absolute rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/3"
                  >
                    <img src={close} alt="menu" className="w-8 h-8" />
                  </button>
                )}
                <Dialog.Title
                  as="h3"
                  className="leading-6  flex gap-2 items-center p-8"
                >
                  <img src={menu_book} alt="menu" />
                  <span className="font-semibold text-black text-[32px]">
                    Menu
                  </span>
                </Dialog.Title>

                <h5 className="text-sm text-white bg-black py-8">
                  <span className="pl-8 text-xl font-bold">Meal</span>
                </h5>

                <ul className="mt-2 font-bold text-xl p-8 flex-col flex gap-5">
                  <li className="flex items-center justify-between">
                    Meal
                    <span className="-rotate-90">
                      <ArrowDown />
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    Drinks
                    <span className="-rotate-90">
                      <ArrowDown />
                    </span>
                  </li>
                  <li className="flex items-center justify-between">
                    Coffee
                    <span className="-rotate-90">
                      <ArrowDown />
                    </span>
                  </li>
                </ul>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CustomModal;
