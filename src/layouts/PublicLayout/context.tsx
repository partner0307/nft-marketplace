import { Dispatch, createContext, useContext } from "react";
import { PublicLayoutActionInterface, initialState } from "./reducer";

export interface PublicLayoutProviderInterface {
    slideOpened: boolean
    dispatch: Dispatch<PublicLayoutActionInterface>
}

export const PublicLayoutContext = createContext<PublicLayoutProviderInterface>(initialState);

export const PublicLayoutProvider = ({
    children,
    value
}: {
    children: any,
    value: PublicLayoutProviderInterface
}) => {
    return (
        <PublicLayoutContext.Provider value={value}>
            {children}
        </PublicLayoutContext.Provider>
    )
}

export const usePublicLayoutContext = () => {
    return useContext(PublicLayoutContext);
}
