import { initialStateReducer } from "../../helper/states/initialInstitucion";
import { Types } from "../types/types";

const replaceInstitucion = (instituciones, inst) =>
    instituciones.map(i => i._id === inst._id ? inst : i);

const addInstitucion = (instituciones, inst) =>
    [...instituciones, inst].sort((a, b) => a.institucion > b.institucion ? 1 : -1);

export const institucionReducer = (state = initialStateReducer, { type, payload }) => {
    state.loading = false;
    switch (type) {
        case Types.Institucion.LOADING:
            return {
                ...state,
                loading: true,
            }
        case Types.Institucion.FETCH:
            return {
                instituciones: payload,
                active: null,
            };
        case Types.Institucion.SET_ACTIVE:
            return {
                ...state,
                active: payload,
            };
        case Types.Institucion.CLEAR_ACTIVE:
            return {
                ...state,
                active: null,
            };
        case Types.Institucion.UPDATE:
            return {
                active: null,
                instituciones: replaceInstitucion(state.instituciones, payload),
            };
        case Types.Institucion.INSERT:
            return {
                active: null,
                instituciones: addInstitucion(state.instituciones, payload),
            };
        default:
            return state;
    }
}