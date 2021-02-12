import { Types } from "../types/types";

const initialState = {
    componentes: [],
    active: null,
};

const replaceComponente = (componentes = [], componente) =>
    componentes.map(i => i._id === componente._id ? componente : i);

const insertComponente = (componentes = [], componente) => [...componentes, componente]
    .sort((a, b) => a.componente > b.componente ? 1 : -1);

export const componenteReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.Componente.FETCH:
            return {
                doctores: payload,
                active: null,
            };
        case Types.Componente.UPDATE:
            return {
                active: null,
                doctores: replaceComponente(state.doctores, payload),
            };
        case Types.Componente.INSERT:
            return {
                active: null,
                doctores: insertComponente(state.doctores, payload),
            };
        default:
            return state;
    }
}