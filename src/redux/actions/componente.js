import { showError, showSuccess } from "../../helper/alerts";
import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

const startLoading = {
    type: Types.Componente.LOADING,
};

const endLoading = {
    type: Types.Componente.END_LOADING,
}

export const setActive = (componente) => ({
    type: Types.Componente.SET_ACTIVE,
    payload: componente,
});

export const clearActive = () => ({ type: Types.Componente.CLEAR_ACTIVE });

export const startInsertComponente = (componente) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('componentes', componente, 'POST')
            .then(res => {
                if (!res || !res.componente)
                    Promise.reject();
                dispatch(insert(res.componente))
                showSuccess('Componente creado');
            })
            .catch(err => {
                dispatch(endLoading);
                showError(err);
            });
    }

const insert = (componente) => ({
    type: Types.Componente.INSERT,
    payload: componente,
});

export const startUpdateComponente = (componente) =>
    (dispatch) => {
        dispatch(startLoading);
        const endpoint = 'componentes/' + componente._id;
        fetchConToken(endpoint, componente, 'PUT')
            .then(res => {
                if (!res || !res.componente)
                    Promise.reject();
                dispatch(update(res.componente));
                showSuccess('Componente actualizado');
            })
            .catch(err => {
                dispatch(endLoading);
                showError(err);
            });
    }

const update = (componente) => ({
    type: Types.Componente.UPDATE,
    payload: componente,
});

export const startFetchComponentes = () =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('componentes')
            .then(res => {
                if (!res || !res.componentes)
                    Promise.reject();
                dispatch(fetch(res.componentes))
            })
            .catch(err => dispatch(endLoading));
    }

const fetch = (componentes) => ({
    type: Types.Componente.FETCH,
    payload: componentes,
});