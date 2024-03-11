import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

function setCookie(name: string, value: string, options?: { path: string }) {
  cookies.set(name, value, options);
}

function getCookie(name: string) {
  cookies.get(name);
}

function removeCookie(name: string) {
  cookies.remove(name);
}

export { getCookie, removeCookie, setCookie };
