import { showError, showSuccess } from "../../helper/alerts";
import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

const startLoading = {
    type: Types.Institucion.LOADING,
};

const endLoading = {
    type: Types.Institucion.END_LOADING,
}

export const setActive = (institucion) => ({
    type: Types.Institucion.SET_ACTIVE,
    payload: institucion,
});

export const clearActive = () => ({ type: Types.Institucion.CLEAR_ACTIVE });

export const startInsertInstitucion = (institucion) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('instituciones', institucion, 'POST')
            .then(res => {
                if (!res || !res.institucion)
                    Promise.reject();
                dispatch(insertInstitucion(institucion));
                showSuccess('Institución creada');
            })
            .catch(err => {
                dispatch(endLoading);
                showError(err);
            });
    }

const insertInstitucion = (institucion) => ({
    type: Types.Institucion.INSERT,
    payload: institucion,
});

export const startUpdateInstitucion = (institucion) =>
    (dispatch) => {
        dispatch(startLoading);
        const endpoint = 'instituciones/' + institucion._id
        fetchConToken(endpoint, institucion, 'PUT')
            .then(res => {
                if (!res || !res.institucion)
                    Promise.reject();
                dispatch(updateInstitucion(institucion));
                showSuccess('Institución actualizada');
            })
            .catch(err => {
                dispatch(endLoading);
                showError(err);
            });
    }

const updateInstitucion = (institucion) => ({
    type: Types.Institucion.UPDATE,
    payload: institucion,
})

export const startFetchInstituciones = () =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('instituciones')
            .then(res => {
                if (!res || !res.instituciones)
                    Promise.reject();
                dispatch(fetchInstituciones(res.instituciones))
            })
            .catch(err => dispatch(endLoading));
    }

const fetchInstituciones = (instituciones) => ({
    type: Types.Institucion.FETCH,
    payload: instituciones,
});