import fetchData from "@/services";

const menuEndpoint = "menu";

const getMenuItems = () => fetchData(menuEndpoint, undefined, true);

export { getMenuItems };
