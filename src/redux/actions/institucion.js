import dayjs from 'dayjs';
import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

const fromJSON = (i) => ({
    ...i,
    fecha_creacion: i.fecha_creacion && dayjs(i.fecha_creacion),
    fecha_actualizacion: i.fecha_actualizacion && dayjs(i.fecha_actualizacion)
});

export const setActive = (institucion) => ({
    type: Types.Institucion.SET_ACTIVE,
    payload: institucion,
});

export const clearActive = () => ({
    type: Types.Institucion.CLEAR_ACTIVE,
});

export const startInsertInstitucion = (institucion) => {
    return (dispatch) => {
        fetchConToken('instituciones', institucion, 'POST')
            .then(response => response.json())
            .then(({ institucion }) => dispatch(insertInstitucion(institucion)));
    }
}

const insertInstitucion = (institucion) => ({
    type: Types.Institucion.INSERT,
    payload: institucion,
});

export const startUpdateInstitucion = (institucion) => {
    const endpoint = 'instituciones/' + institucion._id
    return (dispatch) => {
        fetchConToken(endpoint, institucion, 'PUT')
            .then(response => response.json())
            .then(({ institucion }) => dispatch(updateInstitucion(institucion)));
    }
};

const updateInstitucion = (institucion) => ({
    type: Types.Institucion.UPDATE,
    payload: institucion,
})

export const startFetchInstituciones = () => {
    return (dispatch) => {
        fetchConToken('instituciones')
            .then(response => response.json())
            .then(({ instituciones }) => {
                instituciones = instituciones.map(i => fromJSON(i));
                dispatch(fetchInstituciones(instituciones));
            });
    }
}

const fetchInstituciones = (instituciones) => ({
    type: Types.Institucion.FETCH,
    payload: instituciones,
});