import { combineReducers } from "redux";
import ClientProjectReducer from "./reducer/clientProjectReducer";
import LinkReducer from "./reducer/LinkReducer";

const RootReducer = combineReducers({
    ClientProjectReducer,
    LinkReducer,
});

export default RootReducer;