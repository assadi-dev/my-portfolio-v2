import { LOADER_PROJECTS, LOADER_PROJECTS_ERROR, LOADER_PROJECTS_SUCCESS } from './types';

const initialState = {
    isLoading: false,
    project: [],
    error: ''
}


const ProjectReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case LOADER_PROJECTS:
            return {
                ...state,
                isLoading:true
            }
        case LOADER_PROJECTS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                project: action.payload,
                error:''
            }
        case LOADER_PROJECTS_ERROR:
            return {
                ...state,
                isLoading: false,
                project: [],
                error:action.payload
            }
            default : return state
    }
}

export default ProjectReducer
