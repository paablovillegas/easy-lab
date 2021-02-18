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

export const startFetchFechas = (fechaInicio, fechaFin) => {
    return (dispatch) => {
        const values = { fecha_inicio: fechaInicio, fecha_fin: fechaFin };
        fetchConToken('ordenes/fechas', values, 'POST')
            .then(response => response.json())
            .then(({ ordenes }) => console.log(ordenes));
    }
}