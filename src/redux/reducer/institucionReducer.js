import { Types } from "../types/types";

const initialState = {
    instituciones: [],
    active: null,
}

export const institucionReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.Institucion.FETCH:
            return {
                ...state,
                instituciones: payload,
            };
        default:
            return state;
    }
}