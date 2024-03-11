import useDebounced from "./api/useDebounced";
import useGetData from "./api/useGetData";
import useLogOut from "./auth/useAuth";
import useCookies from "./auth/useCookies";
import useLocalStorage from "./auth/useLocalStorage";
import useWarningForUnsaved from "./useWarningForUnsaved";

/* ----------------------------------- UI ----------------------------------- */
import useChangeImages from "./ui/useChangeImages";
import useClickOutside from "./ui/useClickOutside";
import useCountDown from "./ui/useCountDown";
import useMediaMatch from "./ui/useMediaMatch";
import usePlaceHolders from "./ui/usePlaceHolders";
import useScrollDirection from "./ui/useScrollDirection";
import useTabs from "./ui/useTabs";

export {
  useChangeImages,
  useClickOutside,
  useCookies,
  useCountDown,
  useDebounced,
  useGetData,
  useLocalStorage,
  useLogOut,
  useMediaMatch,
  usePlaceHolders,
  useScrollDirection,
  useTabs,
  useWarningForUnsaved,
};
