import { delay } from "@/libs/delay";

const mainUrl = "http://localhost:3500";
export type ParamsType = { [key: string]: string | undefined };

const fetchData = async (endpoint: string, params?: ParamsType, delayed = false) => {
  // const url = new URL(`${mainUrl}/${endpoint}`);
  const url = `../../data/data.json`;

  url.toString();

  if (delayed) await delay();

  try {
    const res = await fetch(url);

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;

export const fetchData2 = async (url: string, params?: ParamsType, delayed = false) => {
  if (delayed) await delay();

  try {
    const res = await fetch(url);

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const getSpecialMealData = () => fetchData2("../../data/special.json", undefined, true);
