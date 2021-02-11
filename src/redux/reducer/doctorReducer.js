import { Types } from "../types/types";

const initialState = {
    doctores: [],
    active: null,
}

const replaceDoctor = (doctores = [], doctor) =>
    doctores.map(i => i._id === doctor._id ? doctor : i);

const insertDoctor = (doctores = [], doctor) => [...doctores, doctor]
    .sort((a, b) => a.apellido_paterno + a.apellido_materno >
        b.apellido_paterno + b.apellido_materno ? 1 : -1);

export const doctorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.Doctor.FETCH:
            return {
                doctores: payload,
                active: null,
            };
        case Types.Doctor.SET_ACTIVE:
            return {
                ...state,
                active: payload
            };
        case Types.Doctor.CLEAR_ACTIVE:
            return {
                ...state,
                active: null,
            }
        case Types.Doctor.UPDATE:
            return {
                active: null,
                doctores: replaceDoctor(state.doctores, payload),
            };
        case Types.Doctor.INSERT:
            return {
                active: null,
                doctores: insertDoctor(state.doctores, payload),
            };
        default:
            return state;
    }
};