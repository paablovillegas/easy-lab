import { Types } from "../types/types";

const initialState = {
    analisis: [],
    active: null,
};

const replaceAnalisis = (analisis = [], als) =>
    analisis.map(i => i._id === als._id ? als : i);

const insertAnalisis = (analisis = [], als) => [...analisis, als]
    .sort((a, b) => a.analisis > b.analisis ? 1 : -1);

export const analisisReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.Analisis.FETCH:
            return {
                doctores: payload,
                active: null,
            };
        case Types.Analisis.SET_ACTIVE:
            return {
                ...state,
                active: payload,
            };
        case Types.Analisis.CLEAR_ACTIVE:
            return {
                ...state,
                active: null,
            }
        case Types.Analisis.UPDATE:
            return {
                active: null,
                doctores: replaceAnalisis(state.doctores, payload),
            };
        case Types.Analisis.INSERT:
            return {
                active: null,
                doctores: insertAnalisis(state.doctores, payload),
            };
        default:
            return state;
    }
}