import { close } from "@/assets/images";
import { useMediaMatch } from "@/hooks";
import { useModalStore } from "@/stores/modal";
import { cn } from "@/utils";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type CModalProps = {
  isOpened: boolean;
  handleClose: () => void;
  children: JSX.Element;

  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const CModal = ({ isOpened, handleClose, children, className, ...rest }: CModalProps) => {
  const { content, opened, modalWidth, closeBtn, closeModal } = useModalStore((state) => state);

  const sm = useMediaMatch();
  const width = (sm ? 90 : 70) + "%";

  /* -------------------------- Handle Modal With URL ------------------------- */
  // const [searchParams, setSearchParams] = useSearchParams();
  // const isOpened = searchParams.get("openModal") === "true";
  // function handleClose() {
  //   searchParams.delete("openModal");
  //   setSearchParams(searchParams);
  // }

  // <Transition appear show={isOpened} as={Fragment}>
  //   <Dialog
  //     as="div"
  //     className="relative z-10"
  //     onClose={(e) => {
  //       console.log("closed");

  //       handleClose();
  //       e.stopPropagation();
  //     }}
  //   >

  return (
    <Transition appear show={isOpened} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleClose}>
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
          <div className=" min-h-full flex-centered p-4 text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                style={{ width }}
                className={cn(
                  "relative transform  rounded-xl bg-white  text-left align-middle shadow-xl transition-all overscroll-contain item",
                  className
                )}
              >
                {closeBtn && (
                  <button
                    onClick={handleClose}
                    className="bg-primary p-4 absolute rounded-full -right-3 top-0 md:translate-x-1/2  -translate-y-1/3"
                  >
                    <img src={close} alt="menu" className="w-8 h-8" />
                  </button>
                )}

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CModal;
