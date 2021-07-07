import { createStore, combineReducers, applyMiddleware } from 'redux';
import ProjectReducer from '../project/ProjectReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    projects: ProjectReducer,

})

const store = createStore(rootReducer,applyMiddleware(thunk) );

export default store;