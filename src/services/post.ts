import { delay } from "@/libs/delay";

const mainUrl = "http://localhost:3500";
export type ParamsType = { [key: string]: string | undefined };

const postReq = async (endpoint: string, body: any, delayed = false) => {
  const url = new URL(`${mainUrl}/${endpoint}`);

  url.toString();

  if (delayed) await delay();

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export default postReq;

export const postNewMeal = (body: any) => postReq("meals", body, true);
