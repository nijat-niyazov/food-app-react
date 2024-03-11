function action(action: "set" | "remove" | "get", key: string, value?: unknown) {
  try {
    switch (action) {
      case "set":
        window.localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
        break;
      case "get":
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : null;

      case "remove":
        window.localStorage.removeItem(key);
        break;
    }
  } catch (error) {
    console.log(error);
  }
}

const useLocalStorage = () => {
  function setItem(key: string, value: unknown) {
    action("set", key, value);
  }

  function getItem(key: string) {
    return action("get", key);
  }

  function removeItem(key: string) {
    action("remove", key);
  }

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;
