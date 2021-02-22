import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

export const setActive = (componente) => ({
    type: Types.Componente.SET_ACTIVE,
    payload: componente,
});

export const clearActive = () => ({ type: Types.Componente.CLEAR_ACTIVE });

export const startInsertComponente = (componente) =>
    (dispatch) => fetchConToken('componentes', componente, 'POST')
        .then(({ componente }) => dispatch(insert(componente)));

const insert = (componente) => ({
    type: Types.Componente.INSERT,
    payload: componente,
});

export const startUpdateComponente = (componente) =>
    (dispatch) => {
        const endpoint = 'componentes/' + componente._id;
        fetchConToken(endpoint, componente, 'PUT')
            .then(({ componente }) => dispatch(update(componente)));
    }

const update = (componente) => ({
    type: Types.Componente.UPDATE,
    payload: componente,
});

export const startFetchComponentes = () =>
    (dispatch) => fetchConToken('componentes')
        .then(({ componentes }) => dispatch(fetch(componentes)));

const fetch = (componentes) => ({
    type: Types.Componente.FETCH,
    payload: componentes,
});