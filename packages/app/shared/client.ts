import { SERVICE_URL } from "./config";

export const get = async <TResult>(path: string): Promise<TResult> => {
  const data: any = await fetch(`${SERVICE_URL}/${path}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return data.json() as TResult;
};
