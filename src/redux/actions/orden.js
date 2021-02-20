import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

export const setActive = (orden) => ({
    type: Types.Orden.SET_ACTIVE,
    payload: orden,
});

export const clearActive = () => ({
    type: Types.Orden.CLEAR_ACTIVE,
});

export const startInsertOrden = (orden) => {
    return (dispatch) => fetchConToken('ordenes', orden, 'POST')
        .then(response => response.json())
        .then(({ orden }) => dispatch(insert(orden)));
}

const insert = (orden) => ({
    type: Types.Orden.INSERT,
    payload: orden,
});

export const startUpdateOrden = (orden) => {
    return (dispatch) => {
        const endpoint = 'ordenes/' + orden._id;
        fetchConToken(endpoint, orden, 'PUT')
            .then(response => response.json())
            .then(({ orden }) => dispatch(update(orden)));
    }
}

export const update = (orden) => ({
    type: Types.Orden.UPDATE,
    payload: orden,
});

export const startFetchDefault = () => {
    return (dispatch) => {
        fetchConToken('ordenes')
            .then(response => response.json())
            .then(({ ordenes }) => dispatch(fetchDeault(ordenes)));
    }
};

const fetchDeault = (ordenes) => ({
    type: Types.Orden.Fetch.DEFAULT,
    payload: ordenes,
});

export const startFetchBusquedaAvanzada = (options) => {
    return (dispatch) => {
        fetchConToken('ordenes/avanzado', options, 'POST')
            .then(response => response.json())
            .then(({ ordenes }) => dispatch(fetchBusquedaAvanzada(ordenes)));
    }
}

const fetchBusquedaAvanzada = (ordenes) => ({
    type: Types.Orden.Fetch.DEFAULT,
    payload: ordenes,
});

export const startFetchItem = (uid) => {
    return (dispatch) => {
        fetchConToken('ordenes/' + uid)
            .then(response => response.json())
            .then(({ orden }) => dispatch(fetchItem(orden)));
    }
}

const fetchItem = (orden) => ({
    type: Types.Orden.Fetch.ITEM,
    payload: orden,
});