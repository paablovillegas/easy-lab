import { initialReducerAnalisis } from "../../helper/states/initialAnalisis";
import { Types } from "../types/types";

const replaceAnalisis = (analisis = [], als) =>
    analisis.map(i => i._id === als._id ? als : i);

const insertAnalisis = (analisis = [], als) => [...analisis, als]
    .sort((a, b) => a.analisis > b.analisis ? 1 : -1);

export const analisisReducer = (state = initialReducerAnalisis, { type, payload }) => {
    state.loading = false;
    switch (type) {
        case Types.Analisis.LOADING:
            return {
                ...state,
                loading: true,
            }
        case Types.Analisis.FETCH:
            return {
                analisis: payload,
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
                analisis: replaceAnalisis(state.analisis, payload),
            };
        case Types.Analisis.INSERT:
            return {
                active: null,
                analisis: insertAnalisis(state.analisis, payload),
            };
        default:
            return state;
    }
}