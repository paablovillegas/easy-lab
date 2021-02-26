import { showError, showSuccess } from "../../helper/alerts";
import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types"

const startLoading = {
    type: Types.Doctor.LOADING,
};

const endLoading = {
    type: Types.Doctor.END_LOADING,
}

export const setActive = (doctor) => ({
    type: Types.Doctor.SET_ACTIVE,
    payload: doctor,
});

export const clearActive = () => ({ type: Types.Doctor.CLEAR_ACTIVE });

export const startInsertDoctor = (doctor) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('doctores', doctor, 'POST')
            .then(res => {
                if (!res || !res.doctor)
                    Promise.reject();
                dispatch(insertDoctor(res.doctor));
                showSuccess('Doctor creado');
            }).catch(err => {
                dispatch(endLoading);
                showError(err);
            });
    }

const insertDoctor = (doctor) => ({
    type: Types.Doctor.INSERT,
    payload: doctor,
});

export const startUpdateDoctor = (doctor) =>
    (dispatch) => {
        dispatch(startLoading);
        const endpoint = 'doctores/' + doctor._id;
        fetchConToken(endpoint, doctor, 'PUT')
            .then(res => {
                if (!res || !res.doctor)
                    Promise.reject()
                dispatch(updateDoctor(res.doctor))
                showSuccess('Doctor actualizado');
            }).catch(err => {
                dispatch(endLoading);
                showError(err);
            });
    }

const updateDoctor = (doctor) => ({
    type: Types.Doctor.UPDATE,
    payload: doctor,
});

export const startFetchDoctores = () =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('doctores')
            .then(res => {
                if (!res || !res.doctores)
                    Promise.reject();
                dispatch(fetch(res.doctores));
            })
            .catch(err => dispatch(endLoading));
    }

const fetch = (doctores) => ({
    type: Types.Doctor.FETCH,
    payload: doctores,
});
