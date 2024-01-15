import { useEffect } from "react";

const useWarningForUnsaved = ({ condition }: { condition?: boolean }) => {
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (condition) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [condition]);
};

export default useWarningForUnsaved;
