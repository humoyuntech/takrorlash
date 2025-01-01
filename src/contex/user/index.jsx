/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "./reducer";
// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();
export const UserContext = () => useContext(Context);

export const UserProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <Context.Provider value={[state, dispatch]}>
            {props.children}
        </Context.Provider>
    )
}
