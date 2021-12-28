import axios from "axios";
const api_link = process.env.REACT_APP_API_HOST;

export const GET_CV = "GET_CV";

export const get_cv = () => {
    return async(dispatch) => {
        try {
            await axios.get(`${api_link}/cv`).then((response) => {
                dispatch({
                    type: GET_CV,
                    payload: `${api_link}${response.data.file.url}`,
                });
            });
        } catch (error) {}
    };
};