import axios from "axios";
const api_link = process.env.REACT_APP_API_HOST;

export const GET_CLIENT_PROJECT = "GET_CLIENT_PROJECT";
export const GET_CLIENT_SINGLE_PROJECT = "GET_CLIENT_SINGLE_PROJECT";

export const get_client_project = () => {
    return async(dispatch) => {
        try {
            await axios.get(`${api_link}/projects`).then((response) => {
                const data = response.data.map((p) => {
                    return {
                        ...p,
                        category: p.category.name,
                        preview: `${api_link}${p.preview.url}`,
                    };
                });
                data.map((p) => {
                    let array = [];
                    p.tags.map((t) => {
                        array.push(t.name.trim());
                        p.tags = array.join(",");
                        return t;
                    });
                    return p;
                });
                let cleanData = data.sort((a, b) => (a.postedAt > b.postedAt ? -1 : 1));

                dispatch({ type: GET_CLIENT_PROJECT, payload: cleanData });
            });
        } catch (error) {}
    };
};

export const get_client_current_project = (slug) => {
    return async(dispatch) => {
        try {
            await axios.get(`${api_link}/project/${slug}`).then((response) => {
                const data = {
                    ...response.data,
                    category: response.data.category.name,
                    preview: `${api_link}${response.data.preview.url}`,
                };

                dispatch({ type: GET_CLIENT_SINGLE_PROJECT, payload: data });
            });
        } catch (error) {
            console.log(error);
        }
    };
};