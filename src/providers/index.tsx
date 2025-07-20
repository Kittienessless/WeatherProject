import { createContext, FC } from "react";
import Store from "../store/store";
import { JSX } from "react/jsx-runtime";
import { ErrorBoundary } from "react-error-boundary";
import Start from "../components/Start.tsx";

interface State {
  store: Store;
}
const store = new Store();

export const UserContext = createContext<State>({
  store,
});
interface IProviders {
  /** Content that will be wrapped by providers. */
  readonly children: JSX.Element;
}

export const Providers: FC<IProviders> = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Start}>
      <UserContext.Provider value={{ store }}>{children}</UserContext.Provider>
    </ErrorBoundary>
  );
};
