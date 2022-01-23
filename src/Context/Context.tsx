import React, { useState, createContext } from "react";

export const Context =  createContext({});


export default function ContextProvider({ children } : any){
 
    
const[active, setActive] = useState("Characters");

    return(
        <Context.Provider value={{ 
            active,
            setActive
        }}>
            {children}
        </Context.Provider>
    )

}