import { toast, showError } from "../../helper/alerts";
import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

export const setActive = (paciente) => ({
    type: Types.Paciente.SET_ACTIVE,
    payload: paciente,
});

export const clearActive = () => ({ type: Types.Paciente.CLEAR_ACTIVE });

export const startInsertPaciente = (paciente) =>
    (dispatch) => fetchConToken('pacientes', paciente, 'POST')
        .then(res => {
            if (!res) Promise.reject();
            if (res.paciente) {
                dispatch(insertPaciente(res.paciente));
                toast.fire({
                    title: 'Paciente creado',
                    icon: 'success',
                });
            }
        }).catch(showError);

const insertPaciente = (paciente) => ({
    type: Types.Paciente.INSERT,
    payload: paciente,
});

export const startUpdatePaciente = (paciente) =>
    (dispatch) => fetchConToken('pacientes/' + paciente._id, paciente, 'PUT')
        .then(res => {
            if (!res) Promise.reject();
            if (res.paciente) {
                dispatch(updatePaciente(res.paciente));
                toast.fire({
                    title: 'Paciente actualizado',
                    icon: 'success',
                });
            }
        }).catch(showError);

const updatePaciente = (paciente) => ({
    type: Types.Paciente.UPDATE,
    payload: paciente,
});

export const startFetchPacientes = () =>
    (dispatch) => fetchConToken('pacientes')
        .then(res => {
            if (res && res.pacientes)
                dispatch(fetchPacientes(res.pacientes));
        });

const fetchPacientes = (pacientes) => ({
    type: Types.Paciente.FETCH,
    payload: pacientes,
});
