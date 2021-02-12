import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types"

export const setActive = (doctor) => ({
    type: Types.Doctor.SET_ACTIVE,
    payload: doctor,
});

export const clearActive = () => ({
    type: Types.Doctor.CLEAR_ACTIVE,
});

export const startInsertDoctor = (doctor) => {
    return (dispatch) => {
        fetchConToken('doctores', doctor, 'POST')
            .then(response => response.json())
            .then(({ doctor }) => dispatch(insertDoctor(doctor)));
    }
};

const insertDoctor = (doctor) => ({
    type: Types.Doctor.INSERT,
    payload: doctor,
});

export const startUpdateDoctor = (doctor) => {
    return (dispatch) => {
        const endpoint = 'doctores/' + doctor._id;
        fetchConToken(endpoint, doctor, 'PUT')
            .then(response => response.json())
            .then(({ doctor }) => dispatch(updateDoctor(doctor)));
    }
};

const updateDoctor = (doctor) => ({
    type: Types.Doctor.UPDATE,
    payload: doctor,
});

export const startFetchDoctores = () => {
    return (dispatch) => {
        fetchConToken('doctores')
            .then(response => response.json())
            .then(({ doctores }) => dispatch(fetch(doctores)));
    }
};

const fetch = (doctores) => ({
    type: Types.Doctor.FETCH,
    payload: doctores,
});
