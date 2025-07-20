import { createContext, FC, JSX } from "react";
import Store from "../store/store";

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
    <UserContext.Provider value={{ store }}>{children}</UserContext.Provider>
  );
};
