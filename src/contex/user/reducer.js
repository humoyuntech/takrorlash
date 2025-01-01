import { students } from "../../mock/students";

export const initialState = students

export const reducer = (state, action) => {
    switch(action.type){
        case 'delete':
             return action.payload;
        default:
            return state
    }
}