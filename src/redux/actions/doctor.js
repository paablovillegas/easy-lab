import { toast, showError } from "../../helper/alerts";
import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types"

export const setActive = (doctor) => ({
    type: Types.Doctor.SET_ACTIVE,
    payload: doctor,
});

export const clearActive = () => ({ type: Types.Doctor.CLEAR_ACTIVE });

export const startInsertDoctor = (doctor) =>
    (dispatch) => fetchConToken('doctores', doctor, 'POST')
        .then(({ doctor }) => dispatch(insertDoctor(doctor)))
        .catch(showError);

const insertDoctor = (doctor) => ({
    type: Types.Doctor.INSERT,
    payload: doctor,
});

export const startUpdateDoctor = (doctor) =>
    (dispatch) => {
        const endpoint = 'doctores/' + doctor._id;
        fetchConToken(endpoint, doctor, 'PUT')
            .then(({ doctor }) => dispatch(updateDoctor(doctor)));
    }

const updateDoctor = (doctor) => ({
    type: Types.Doctor.UPDATE,
    payload: doctor,
});

export const startFetchDoctores = () =>
    (dispatch) => fetchConToken('doctores')
        .then(({ doctores }) => dispatch(fetch(doctores)));

const fetch = (doctores) => ({
    type: Types.Doctor.FETCH,
    payload: doctores,
});
