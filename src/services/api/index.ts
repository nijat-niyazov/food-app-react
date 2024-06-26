import { delay } from "./delay";

const mainUrl = "http://localhost:3500";
export type ParamsType = { [key: string]: string | undefined };

const fetchData = async (endpoint: string, params?: ParamsType, delayed = false) => {
  const url = `../data/${endpoint}.json`;

  url.toString();

  if (delayed) await delay();

  try {
    const res = await fetch(url);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;

export const fetchData2 = async (url: string, params?: ParamsType, delayed = false, time = 5000) => {
  if (delayed) await delay(time);

  try {
    const res = await fetch(url);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export type Answer = {
  key: string;
  answer: { title: string; content: string; image: string }[];
};

export type FaqData = {
  id: number;
  question: string;
  answers: Answer[];
};

export const getSpecialMealData = () => fetchData2("../../data/special.json", undefined, true);
