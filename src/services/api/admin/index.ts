import { fetchData2 } from "..";

const menuUrl = "../../data/menu.json";
const menuCategoriesUrl = "../../data/menu-categories.json";
const faqUrl = "../../data/faq.json";

export const getMenu = () => fetchData2(menuUrl, undefined, true);
export const getMenuCategories = () => fetchData2(menuCategoriesUrl, undefined, true, 1000);

export const getFaqData = () => fetchData2(faqUrl, undefined, true);
