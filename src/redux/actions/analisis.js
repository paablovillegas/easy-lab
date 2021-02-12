import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

export const setActive = (analisis) => ({
    type: Types.Analisis.SET_ACTIVE,
    payload: analisis,
});

export const clearActive = () => ({
    type: Types.Analisis.CLEAR_ACTIVE,
});

export const startInsert = (analisis) => {
    return (dispatch) => fetchConToken('analisis', analisis, 'POST')
        .then(response => response.json())
        .then(({ analisis }) => dispatch(insert(analisis)));
};

const insert = (analisis) => ({
    type: Types.Analisis.INSERT,
    payload: analisis,
});

export const startUpdate = (analisis) => {
    return (dispatch) => {
        const endpoint = 'analisis/' + analisis._id;
        fetchConToken(endpoint, analisis, 'PUT')
            .then(response => response.json())
            .then(({ analisis }) => dispatch(update(analisis)));
    }
};

const update = (analisis) => ({
    type: Types.Analisis.UPDATE,
    payload: analisis,
});

export const startFetch = () => {
    return (dispatch) => fetchConToken('analisis')
        .then(response => response.json())
        .then(({ analisis }) => dispatch(fetch(analisis)));
};

const fetch = (analisis) => ({
    type: Types.Analisis.FETCH,
    payload: analisis,
});