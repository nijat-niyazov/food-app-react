import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

function useGetData(cacheKeys: string[], fetcherFunction: (queries: string) => void, options?: any): UseQueryResult<any> {
  const [searcParams] = useSearchParams();
  const queriesString = searcParams.toString();

  const result = useQuery({
    queryKey: [...cacheKeys, queriesString],
    queryFn: () => fetcherFunction(queriesString),
  });

  return result;
}

export default useGetData;

// function useGetData(cacheKeys: string, fetcherFunction: (queries: string) => void): UseQueryResult<any> {
//   const [searcParams] = useSearchParams();
//   const queriesString = searcParams.toString();

//   const result = useQuery({
//     queryKey: [cacheKeys, queriesString],
//     queryFn: () => fetcherFunction(queriesString),
//   });

//   return result;
// }

// export default useGetData;
