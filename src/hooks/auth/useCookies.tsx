import Cookies from "universal-cookie";

const useCookies = () => {
  const cookies = new Cookies(null, { path: "/" });

  function getCookie(key: string) {
    return cookies.get(key);
  }

  function setCookie(key: string, value: string) {
    return cookies.set(key, value);
  }

  function removeCookie(key: string) {
    return cookies.remove(key);
  }

  return { getCookie, setCookie, removeCookie };
};

export default useCookies;
