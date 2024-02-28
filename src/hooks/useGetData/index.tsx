import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

// function useGetData(cacheKeys: string[], fetcherFunction: (queries: string) => void, options?: any): UseQueryResult<any> {
function useGetData<T>(
  cacheKeys: string[],
  fetcherFunction: (queries: string) => Promise<T>, // You might want to adjust this to return a Promise
  options?: UseQueryOptions
): UseQueryResult<T> {
  const [searcParams] = useSearchParams();
  const queriesString = searcParams.toString();

  const result = useQuery({
    queryKey: [...cacheKeys, queriesString],
    queryFn: async () => await fetcherFunction(queriesString),
  });

  return result;
}

export default useGetData;
