import { showError, showSuccess } from "../../helper/alerts";
import { fetchConToken } from "../../helper/fetch";
import { Types } from "../types/types";

const startLoading = {
    type: Types.Paciente.LOADING,
};

const endLoading = {
    type: Types.Paciente.END_LOADING,
};

export const setActive = (paciente) => ({
    type: Types.Paciente.SET_ACTIVE,
    payload: paciente,
});

export const clearActive = () => ({ type: Types.Paciente.CLEAR_ACTIVE });

export const startInsertPaciente = (paciente) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('pacientes', paciente, 'POST')
            .then(res => {
                if (!res || !res.paciente)
                    Promise.reject();
                dispatch(insertPaciente(res.paciente));
                showSuccess('Paciente creado');
            }).catch(err => {
                dispatch(endLoading);
                showError(err);
            });
    }

const insertPaciente = (paciente) => ({
    type: Types.Paciente.INSERT,
    payload: paciente,
});

export const startUpdatePaciente = (paciente) =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('pacientes/' + paciente._id, paciente, 'PUT')
            .then(res => {
                if (!res || !res.paciente)
                    Promise.reject();
                dispatch(updatePaciente(res.paciente));
                showSuccess('Paciente actualizado');
            }).catch(err => {
                dispatch(endLoading);
                showError(err);
            });
    }

const updatePaciente = (paciente) => ({
    type: Types.Paciente.UPDATE,
    payload: paciente,
});

export const startFetchPacientes = () =>
    (dispatch) => {
        dispatch(startLoading);
        fetchConToken('pacientes')
            .then(res => {
                if (!res || !res.pacientes)
                    Promise.reject();
                dispatch(fetchPacientes(res.pacientes));
            })
            .catch(err => dispatch(endLoading));
    }

const fetchPacientes = (pacientes) => ({
    type: Types.Paciente.FETCH,
    payload: pacientes,
});
