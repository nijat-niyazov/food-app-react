import Cookies from "universal-cookie";

const useCookies = () => {
  const cookies = new Cookies(null, { path: "/" });

  function getCookie(key: string): string | null {
    return cookies.get(key);
  }

  function setCookie(key: string, value: string) {
    cookies.set(key, value);
  }

  function removeCookie(key: string) {
    cookies.remove(key);
  }

  return { getCookie, setCookie, removeCookie };
};

export default useCookies;
