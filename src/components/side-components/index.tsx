import { Fragment } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { CustomModal } from "..";

const SideComponents = () => {
  return (
    <Fragment>
      <CustomModal />

      <Toaster
        toastOptions={{
          success: {
            duration: 2000,
            className: "text-white whitespace-nowrap bg-greeny max-w-[700px]",
          },
        }}
      >
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <button className="flex items-center" onClick={() => toast.dismiss(t.id)}>
                {icon}
                {message}
              </button>
            )}
          </ToastBar>
        )}
      </Toaster>
    </Fragment>
  );
};

export default SideComponents;
