import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

function useGetData<T>(cacheKeys: string[], fetcherFunction: (queries: string) => void, options?: UseQueryOptions): UseQueryResult<T> {
  const [searcParams] = useSearchParams();
  const queriesString = searcParams.toString();

  const queryKey = [...cacheKeys, queriesString];
  const queryFn = () => fetcherFunction(queriesString);

  console.log(queryKey);

  return useQuery({ queryKey, queryFn });
}

export default useGetData;
