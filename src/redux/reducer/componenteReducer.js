import { initialStateReducer } from "../../helper/states/initialComponente";
import { Types } from "../types/types";

const replaceComponente = (componentes = [], componente) =>
    componentes.map(i => i._id === componente._id ? componente : i);

const insertComponente = (componentes = [], componente) => [...componentes, componente]
    .sort((a, b) => a.componente > b.componente ? 1 : -1);

export const componenteReducer = (state = initialStateReducer, { type, payload }) => {
    switch (type) {
        case Types.Componente.FETCH:
            return {
                componentes: payload,
                active: null,
            };
        case Types.Componente.SET_ACTIVE:
            return {
                ...state,
                active: payload,
            };
        case Types.Componente.CLEAR_ACTIVE:
            return {
                ...state,
                active: null,
            }
        case Types.Componente.UPDATE:
            return {
                active: null,
                componentes: replaceComponente(state.componentes, payload),
            };
        case Types.Componente.INSERT:
            return {
                active: null,
                componentes: insertComponente(state.componentes, payload),
            };
        default:
            return state;
    }
}