import { toast } from "../../helper/alerts";
import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

export const setActive = (institucion) => ({
    type: Types.Institucion.SET_ACTIVE,
    payload: institucion,
});

export const clearActive = () => ({ type: Types.Institucion.CLEAR_ACTIVE });

export const startInsertInstitucion = (institucion) =>
    (dispatch) => fetchConToken('instituciones', institucion, 'POST')
        .then(res => {
            if (!res) Promise.reject();
            if (res.institucion) {
                dispatch(insertInstitucion(institucion));
                toast.fire({
                    title: 'Institución creada',
                    icon: 'success',
                })
            }
        })
        .catch(_ =>
            toast.fire({
                title: 'Error al insertar institución',
                icon: 'error'
            }));

const insertInstitucion = (institucion) => ({
    type: Types.Institucion.INSERT,
    payload: institucion,
});

export const startUpdateInstitucion = (institucion) =>
    (dispatch) => {
        const endpoint = 'instituciones/' + institucion._id
        fetchConToken(endpoint, institucion, 'PUT')
            .then(res => {
                if (!res) Promise.reject();
                if (res.institucion) {
                    dispatch(updateInstitucion(institucion));
                    toast.fire({
                        title: 'Institución actualizada',
                        icon: 'success',
                    })
                }
            })
            .catch(_ =>
                toast.fire({
                    title: 'Error al editar institución',
                    icon: 'error'
                }));
    }

const updateInstitucion = (institucion) => ({
    type: Types.Institucion.UPDATE,
    payload: institucion,
})

export const startFetchInstituciones = () =>
    (dispatch) => fetchConToken('instituciones')
        .then(({ instituciones }) => dispatch(fetchInstituciones(instituciones)));

const fetchInstituciones = (instituciones) => ({
    type: Types.Institucion.FETCH,
    payload: instituciones,
});