function action(action: "set" | "remove" | "get", key: string, value?: unknown) {
  try {
    switch (action) {
      case "set":
        window.localStorage.setItem(key, JSON.stringify(value));
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

const useLocalStorage = (key: string) => {
  // browser may not support local storage or storage has no enough space

  function setItem(value: unknown) {
    action("set", key, value);
  }

  function getItem() {
    return action("get", key);
  }

  function removeItem() {
    action("remove", key);
  }

  return { setItem, getItem, removeItem };
};

export default useLocalStorage;

// function    tryCatchWrapper (callback: unknown)  {
//   try {
//     return ()=>callback();
//   } catch (error) {
//     console.error(error);
//   }
// };

// const useLocalStorage = (key: string) => {
//   // browser may not support local storage or storage has no enough space

//   function setItem(value: unknown) {
//     tryCatchWrapper(      window.localStorage.setItem(key, JSON.stringify(value))    )  }

//   function getItem() {
//     return action("get", key);
//   }

//   function removeItem() {
//     action("remove", key);
//   }

//   return { setItem, getItem, removeItem };
// };

// export default useLocalStorage;
