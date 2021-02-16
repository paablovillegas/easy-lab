import { initialReducerOrden } from "../../helper/states/initialOrden";
import { Types } from "../types/types";

export const ordenReducer = (state = initialReducerOrden, { type, payload }) => {
    switch (type) {
        case Types.Orden.Nuevo.START_ORDEN:
            return {
                ...state,
                active: payload,
            };
        case Types.Orden.Nuevo.General.SET_PACIENTE:
            return {
                ...state,
                active: {
                    ...state.active,
                    paciente: payload,
                }
            };
        default:
            return state;
    }
}