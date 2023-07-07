import { createContext, useContext } from "react"

export const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext)

    if (context == undefined) {
        return console.log('useUser must be called within a UserContext provider')
    }
    return context
}

