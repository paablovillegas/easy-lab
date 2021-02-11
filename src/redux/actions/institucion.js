import { Types } from "../types/types";

export const setActive = (institucion) => ({
    type: Types.Institucion.SET_ACTIVE,
    payload: institucion,
});

export const insertInstitucion = (institucion) => ({
    type: Types.Institucion.INSERT,
    payload: institucion,
});

export const updateInstitucion = (institucion) => ({
    type: Types.Institucion.UPDATE,
    payload: institucion,
});

export const startFetch = () => {
    
}

export const fetchInstituciones = (instituciones) => ({
    type: Types.Institucion.FETCH,
    payload: instituciones,
});