import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ElementType, ReactNode } from "react";

type ProviderType = [ElementType, Record<string, unknown>];

const providers: ProviderType[] = [
  [QueryClientProvider, { client: new QueryClient() }],
];

const initialComponent = ({ children }: { children: ReactNode[] }) => (
  <>{children}</>
);

const buildProvidersTree = (allProviders: ProviderType[]) =>
  allProviders.reduce(
    (
      AccumulatedComponents: ElementType,
      [Provider, props = {}]: ProviderType
    ) =>
      // props is defaultly an empty object if props  are not provided
      {
        return ({ children }) => (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      },
    initialComponent
  );

const ProvidersTree = buildProvidersTree(providers);

export default ProvidersTree;
