import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

export const setActive = (paciente) => ({
    type: Types.Paciente.SET_ACTIVE,
    payload: paciente,
});

export const clearActive = () => ({
    type: Types.Paciente.CLEAR_ACTIVE,
});

export const startInsertPaciente = (paciente) => {
    return (dispatch) => fetchConToken('pacientes', paciente, 'POST')
        .then(response => response.json())
        .then(({ paciente }) => dispatch(insertPaciente(paciente)));
};

const insertPaciente = (paciente) => ({
    type: Types.Paciente.INSERT,
    payload: paciente,
});

export const startUpdatePaciente = (paciente) => {
    return (dispatch) => {
        fetchConToken('pacientes/' + paciente._id, paciente, 'PUT')
            .then(response => response.json())
            .then(({ paciente }) => dispatch(updatePaciente(paciente)))
    }
};

const updatePaciente = (paciente) => ({
    type: Types.Paciente.UPDATE,
    payload: paciente,
});

export const startFetchPacientes = () => {
    return (dispatch) => fetchConToken('pacientes')
        .then(response => response.json())
        .then(({ pacientes }) => dispatch(fetchPacientes(pacientes)))
};

const fetchPacientes = (pacientes) => ({
    type: Types.Paciente.FETCH,
    payload: pacientes,
});
