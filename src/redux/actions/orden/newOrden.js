import { initialStateOrden } from "../../../helper/states/initialOrden";
import { Types } from "../../types/types";

export const nuevaOrden = () => ({
    type: Types.Orden.Nuevo.START_ORDEN,
    payload: { ...initialStateOrden },
})

export const setPaciente = (paciente) => ({
    type: Types.Orden.Nuevo.General.SET_PACIENTE,
    payload: paciente
});

export const enableDisableInstitucion = (active) => ({
    type: Types.Orden.Nuevo.General.Institucion.ENABLE_DISABLE,
    payload: !active,
});

export const setInstitucion = (institucion) => ({
    type: Types.Orden.Nuevo.General.Institucion.SET_INSTITUCION,
    payload: institucion,
});

export const enableDisableDoctor = (active) => ({
    type: Types.Orden.Nuevo.General.Doctor.ENABLE_DISABLE,
    payload: !active,
});

export const setDoctor = (doctor) => ({
    type: Types.Orden.Nuevo.General.Doctor.SET_DOCTOR,
    payload: doctor,
});

export const setAnalisis = (analisis, index) => ({
    type: Types.Orden.Nuevo.Analisis.SET_ANALISIS,
    payload: { analisis, index },
});

export const addAnalisis = () => ({
    type: Types.Orden.Nuevo.Analisis.ADD_ANALISIS,
});

export const removeAnalisis = (index) => ({
    type: Types.Orden.Nuevo.Analisis.REMOVE_ANALISIS,
    payload: index,
});