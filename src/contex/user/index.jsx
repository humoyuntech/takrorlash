/* eslint-disable react/prop-types */
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = (props) => {
    return(
        <UserContext.Provider value="Men Humoyunman">
            {props.children}
        </UserContext.Provider>
    )
}
