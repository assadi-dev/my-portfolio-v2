import { GET_CV } from "../actions/LinkAction";
const initialState = { cv: "" };

function LinkReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CV:
            return {...state, cv: action.payload };

        default:
            return state;
    }
}

export default LinkReducer;