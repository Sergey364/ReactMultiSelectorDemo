import { createContext } from "react";
import {
    Provider,
    createStoreHook,
    createDispatchHook,
    createSelectorHook
} from "react-redux";

const MyContext = createContext(null);
export const useContextProviderStore = createStoreHook(MyContext);
export const useContextProviderDispatch = createDispatchHook(MyContext);
export const useContextProviderSelector = createSelectorHook(MyContext);

export function ContextProvider({ children, store }) {
    return (
        <Provider context={MyContext} store={store}>
            {children}
        </Provider>
    );
}