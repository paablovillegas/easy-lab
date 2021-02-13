import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

export const startInsert = (componente) => {
    return (dispatch) => fetchConToken('componentes', componente, 'POST')
        .then(response => response.json())
        .then(({ componente }) => dispatch(insert(componente)));
};

const insert = (componente) => ({
    type: Types.Componentes.INSERT,
    payload: componente,
});

export const startUpdate = (componente) => {
    return (dispatch) => {
        const endpoint = 'componentes/' + componente._id;
        fetchConToken(endpoint, componente, 'PUT')
            .then(response => response.json())
            .then(({ componente }) => dispatch(update(componente)));
    }
}

const update = (componente) => ({
    type: Types.Componentes.UPDATE,
    payload: componente,
});

export const startFetchComponente = () => {
    return (dispatch) => fetchConToken('componentes')
        .then(response => response.json())
        .then(({ componentes }) => dispatch(fetch(componentes)));
};

const fetch = (componentes) => ({
    type: Types.Componente.FETCH,
    payload: componentes,
});