import { GET_TILL, TILL_ERROR, CLEAR_TILL } from "../actions/types";

const initialState = {
    till: null,
    tills: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action) {
    const {type, payload} = action;

    switch(type) {
        case GET_TILL:
            return{
                ...state,
                till: payload,
                loading: false
            };
        case TILL_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
            case CLEAR_TILL:
                return {
                    ...state,
                    till: null,
                    loading: false
                }
        default:
            return state;
    }
}