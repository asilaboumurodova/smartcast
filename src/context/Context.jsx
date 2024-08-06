import { useState, createContext } from "react"

export const Context = createContext();

function ContextProvider({ children }) {
    const [userlang, setUserLang] = useState(0)

    return (
        <Context.Provider value={{userlang, setUserLang}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider
