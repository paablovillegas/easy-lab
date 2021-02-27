import { showError, showSuccess } from "../../helper/alerts";
import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

const startLoading = {
    type: Types.Orden.LOADING,
};

const endLoading = {
    type: Types.Orden.END_LOADING,
}

export const setActive = (orden) => ({
    type: Types.Orden.SET_ACTIVE,
    payload: orden,
});

export const clearActive = () => ({
    type: Types.Orden.CLEAR_ACTIVE,
});

export const startInsertOrden = (orden) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('ordenes', orden, 'POST')
            .then(res => {
                if (!res || !res.orden)
                    Promise.reject()
                dispatch(insert(res.orden))
                showSuccess('Orden creada');
            })
            .catch(err => {
                dispatch(endLoading);
                showError(err);
            });
    }

const insert = (orden) => ({
    type: Types.Orden.INSERT,
    payload: orden,
});

export const startUpdateOrden = (orden) =>
    (dispatch) => {
        dispatch(startLoading);
        const endpoint = 'ordenes/' + orden._id;
        fetchConToken(endpoint, orden, 'PUT')
            .then(res => {
                if (!res || !res.orden)
                    Promise.reject();
                dispatch(update(orden));
                showSuccess('Orden actualizada');
            })
            .catch(err => {
                dispatch(endLoading);
                showError(err);
            })
    }

export const update = (orden) => ({
    type: Types.Orden.UPDATE,
    payload: orden,
});

export const startFetchDefault = (pagina) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('ordenes', { pagina }, 'POST')
            .then(res => {
                if (!res || !res.ordenes)
                    Promise.reject();
                dispatch(fetchDeault(res.ordenes));
            })
            .catch(err => dispatch(endLoading));
    }

const fetchDeault = (ordenes) => ({
    type: Types.Orden.Fetch.DEFAULT,
    payload: { ...ordenes, type: 'default' },
});

export const startFetchBusquedaAvanzada = (options) =>
    (dispatch) => fetchConToken('ordenes/avanzado', options, 'POST')
        .then(res => {
            if (!res || !res.ordenes)
                Promise.reject();
            dispatch(fetchBusquedaAvanzada(res.ordenes))
        })
        .catch(err => dispatch(endLoading));

const fetchBusquedaAvanzada = (ordenes) => ({
    type: Types.Orden.Fetch.DEFAULT,
    payload: { ...ordenes, type: 'advanced' },
});

export const startFetchItem = (uid) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('ordenes/' + uid)
            .then(res => {
                if (!res || !res.orden)
                    Promise.reject();
                dispatch(fetchItem(res.orden))
            })
            .catch(err => {
                showError(err);
                dispatch(endLoading);
            });
    }

const fetchItem = (orden) => ({
    type: Types.Orden.Fetch.ITEM,
    payload: orden,
});

export const startInsertPago = (uid, pago) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken(`ordenes/${uid}/pago`, pago, 'POST')
            .then(res => {
                if (!res || !res.orden)
                    Promise.reject();
                dispatch(insertPago(res.orden))
            })
            .catch(err => dispatch(endLoading));
    }

const insertPago = (orden) => ({
    type: Types.Orden.NUEVO_PAGO,
    payload: orden,
});

export const startSetResultados = (uid, analisis) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken(`ordenes/${uid}/resultados`, analisis, 'PUT')
            .then(res => {
                if (!res || !res.orden)
                    Promise.reject();
                dispatch(setResultados(res.orden))
            })
            .catch(err => dispatch(endLoading));
    }

const setResultados = (orden) => ({
    type: Types.Orden.SET_RESULTADOS,
    payload: orden,
});

export const startPublicacion = (uid) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken(`ordenes/${uid}/publicar`)
            .then(res => {
                if (!res || !res.orden)
                    dispatch(publicar(res.orden));
            })
            .catch(err => dispatch(endLoading));
    }

const publicar = (orden) => ({
    type: Types.Orden.PUBLICAR,
    payload: orden,
});