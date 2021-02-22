import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

export const setActive = (orden) => ({
    type: Types.Orden.SET_ACTIVE,
    payload: orden,
});

export const clearActive = () => ({
    type: Types.Orden.CLEAR_ACTIVE,
});

export const startInsertOrden = (orden) =>
    (dispatch) => fetchConToken('ordenes', orden, 'POST')
        .then(({ orden }) => dispatch(insert(orden)));

const insert = (orden) => ({
    type: Types.Orden.INSERT,
    payload: orden,
});

export const startUpdateOrden = (orden) =>
    (dispatch) => {
        const endpoint = 'ordenes/' + orden._id;
        fetchConToken(endpoint, orden, 'PUT')
            .then(({ orden }) => dispatch(update(orden)));
    }

export const update = (orden) => ({
    type: Types.Orden.UPDATE,
    payload: orden,
});

export const startFetchDefault = () =>
    (dispatch) => fetchConToken('ordenes')
        .then(({ ordenes }) => dispatch(fetchDeault(ordenes)));

const fetchDeault = (ordenes) => ({
    type: Types.Orden.Fetch.DEFAULT,
    payload: ordenes,
});

export const startFetchBusquedaAvanzada = (options) =>
    (dispatch) => fetchConToken('ordenes/avanzado', options, 'POST')
        .then(({ ordenes }) => dispatch(fetchBusquedaAvanzada(ordenes)));

const fetchBusquedaAvanzada = (ordenes) => ({
    type: Types.Orden.Fetch.DEFAULT,
    payload: ordenes,
});

export const startFetchItem = (uid) =>
    (dispatch) => fetchConToken('ordenes/' + uid)
        .then(({ orden }) => dispatch(fetchItem(orden)));

const fetchItem = (orden) => ({
    type: Types.Orden.Fetch.ITEM,
    payload: orden,
});

export const startInsertPago = (uid, pago) =>
    (dispatch) => fetchConToken(`ordenes/${uid}/pago`, pago, 'POST')
        .then(({ orden }) => dispatch(insertPago(orden)));

const insertPago = (orden) => ({
    type: Types.Orden.NUEVO_PAGO,
    payload: orden,
});

export const startSetResultados = (uid, analisis) =>
    (dispatch) => fetchConToken(`ordenes/${uid}/resultados`, analisis, 'PUT')
        .then(({ orden }) => dispatch(setResultados(orden)));

const setResultados = (orden) => ({
    type: Types.Orden.SET_RESULTADOS,
    payload: orden,
});