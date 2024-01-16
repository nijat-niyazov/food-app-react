import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ElementType } from "react";

const queryClient = new QueryClient();

type ProvidersType = [ElementType, Record<string, unknown>];

const buildProvidersTree = (componentsWithProps: ProvidersType[]) => {
  const initialComponent = ({ children }: { children: ElementType[] }) => (
    <>{children}</>
  );

  return componentsWithProps.reduce(
    (
      AccumulatedComponents: ElementType,
      [Provider, props = {}]: ProvidersType
    ) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent
  );
};

const ProvidersTree = buildProvidersTree([
  [QueryClientProvider, { client: queryClient }],
]);

export default ProvidersTree;
