/* eslint-disable react/prop-types */
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const HRContext = createContext();

export const HRProvider = (props) => {
    return(
        <HRContext.Provider value="Men HR Humoyunman">
            {props.children}
        </HRContext.Provider>
    )
}
