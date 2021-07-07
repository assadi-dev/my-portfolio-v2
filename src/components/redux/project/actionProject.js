import {
  LOADER_PROJECTS,
  LOADER_PROJECTS_SUCCESS,
  LOADER_PROJECTS_ERROR,
} from "./types";
import projectData from "../../api/projects";

const loadApiProject = () => {
  return {
    type: LOADER_PROJECTS,
  };
};

const loadApiProjectSuccess = (project) => {
  return {
    type: LOADER_PROJECTS_SUCCESS,
    payload: project,
  };
};

const loadApiProjectError = (error) => {
  return {
    type: LOADER_PROJECTS_ERROR,
    payload: error,
  };
};

export const apiCall = () => {
  return (dispatch) => {
    dispatch(loadApiProject());

    if (projectData.length != 0) {
      let project = projectData.sort((a, b) => {
        return b.annee - a.annee;
      });

      dispatch(loadApiProjectSuccess(project));
    }
  };
};
