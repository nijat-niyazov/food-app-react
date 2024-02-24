import fetchData from "../";

const menuEndpoint = "menu";

const getMenuItems = () => fetchData(menuEndpoint, undefined, true);

export { getMenuItems };
