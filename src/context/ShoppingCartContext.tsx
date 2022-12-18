import { ReactNode, createContext, useContext } from "react";

const ShoppingCartContext = createContext({});

type ShoppingCartProviderProps = {
    children: ReactNode,
}

export const useShoppingCartContext = () => {

    return useContext(ShoppingCartContext)
}



export const ShoppingCartProvider : any = ({ children }: ShoppingCartProviderProps) => {
    return (
        <ShoppingCartContext.Provider  value = {{}}>
         {children}
        </ShoppingCartContext.Provider>

    )
};