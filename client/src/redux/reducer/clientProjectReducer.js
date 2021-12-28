import {
    GET_CLIENT_PROJECT,
    GET_CLIENT_SINGLE_PROJECT,
} from "../actions/projectAction";

const initialState = {
    collections: [],
    current: [],
    isLoading: true,
};

function ClientProjectReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CLIENT_PROJECT:
            return {...state, isLoading: false, collections: action.payload };
            break;

        case GET_CLIENT_SINGLE_PROJECT:
            let data = {...state, isLoading: true };
            return {...data, isLoading: false, current: action.payload };
            break;

        default:
            return state;
    }
}

export default ClientProjectReducer;