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

type Answer = {
  key: string;
  answer: { title: string; content: string; image: any }[];
};

export type FaqData = {
  id: number;
  question: string;
  answers: Answer[];
};

export const getSpecialMealData = () => fetchData2("../../data/special.json", undefined, true);
export const getFaqData = (): Promise<FaqData[]> => fetchData2("../../data/faq.json", undefined, true);
