import { Types } from "../types/types";

const initialState = {
    pacientes: [],
    active: null,
}

const replacePaciente = (pacientes, pax) =>
    pacientes.map(i => i._id === pax._id ? pax : i);

const insertPaciente = (pacientes, pax) => [...pacientes, pax]
    .sort((a, b) => a.apellido_paterno + a.apellido_materno >
        b.apellido_paterno + b.apellido_materno ? 1 : -1);

export const pacienteReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.Paciente.FETCH:
            return {
                pacientes: payload,
                active: null,
            };
        case Types.Paciente.SET_ACTIVE:
            return {
                ...state,
                active: payload,
            };
        case Types.Paciente.CLEAR_ACTIVE:
            return {
                ...state,
                active: null,
            }
        case Types.Paciente.UPDATE:
            return {
                active: null,
                pacientes: replacePaciente(state.pacientes, payload),
            };
        case Types.Paciente.INSERT:
            return {
                active: null,
                pacientes: insertPaciente(state.pacientes, payload),
            };
        default:
            return state;
    }
}