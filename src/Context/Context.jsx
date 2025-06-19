import { createContext } from "react";
import React from "react";

export const Context = createContext(null)


const ContextProvider = ({children}) => {
    const value = <button>+</button>

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )

}
export default ContextProvider