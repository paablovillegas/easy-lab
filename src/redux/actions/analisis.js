import { showError, showSuccess } from "../../helper/alerts";
import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

const startLoading = {
    type: Types.Analisis.LOADING,
};

const endLoading = {
    type: Types.Analisis.END_LOADING,
}

export const setActive = (analisis) => ({
    type: Types.Analisis.SET_ACTIVE,
    payload: analisis,
});

export const clearActive = () => ({ type: Types.Analisis.CLEAR_ACTIVE });

export const startInsertAnalisis = (analisis) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('analisis', analisis, 'POST')
            .then(res => {
                if (!res || !res.analisis)
                    Promise.reject();
                dispatch(insert(res.analisis));
                showSuccess('Análisis creado');
            })
            .catch(err => {
                dispatch(endLoading);
                showError(err);
            });
    }

const insert = (analisis) => ({
    type: Types.Analisis.INSERT,
    payload: analisis,
});

export const startUpdateAnalisis = (analisis) =>
    (dispatch) => {
        dispatch(startLoading);
        const endpoint = 'analisis/' + analisis._id;
        fetchConToken(endpoint, analisis, 'PUT')
            .then(res => {
                if (!res || !res.analisis)
                    Promise.reject();
                dispatch(update(res.analisis));
                showSuccess('Análisis actualizado');
            })
            .catch(err => {
                dispatch(endLoading);
                showError(err);
            })
    };

const update = (analisis) => ({
    type: Types.Analisis.UPDATE,
    payload: analisis,
});

export const startFetchAnalisis = () =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('analisis')
            .then(res => {
                if (!res || !res.analisis)
                    Promise.reject();
                dispatch(fetch(res.analisis))
            })
        .catch(err => dispatch(endLoading));
    }

const fetch = (analisis) => ({
    type: Types.Analisis.FETCH,
    payload: analisis,
});