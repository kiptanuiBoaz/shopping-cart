import { ReactNode, createContext, useContext } from "react";

const shoppingCartContext = createContext({});

type ShoppingCartProviderProps = {
    children: ReactNode,
}

export const ShoppingCartContext= () {

    return useContext(shoppingCartContext)
}



export const shoppingCartProvider: any ({ children }: ShoppingCartProviderProps){
    return (
        <ShoppingCartContext.Provider  value= {{}}>
         { children }
        < /ShoppingCartContext.Provider>

    )
};