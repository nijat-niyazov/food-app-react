import { delay } from "@/lib/delay";

const mainUrl = "http://localhost:3500";
export type ParamsType = { [key: string]: string | undefined };

const fetchData = async (
  endpoint: string,
  params?: ParamsType,
  delayed = false
) => {
  const url = new URL(`${mainUrl}/${endpoint}`);

  url.toString();

  if (delayed) {
    await delay();
  }

  try {
    const res = await fetch(url);

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
