import { initialStateOrdenAnalisis } from "../../helper/states/initialAnalisis";
import { initialReducerOrden } from "../../helper/states/initialOrden";
import { Types } from "../types/types";

export const ordenReducer = (state = initialReducerOrden, { type, payload }) => {
    switch (type) {
        case Types.Orden.Nuevo.START_ORDEN:
            state.active = payload
            return { ...state };
        case Types.Orden.Nuevo.General.SET_PACIENTE:
            state.active.paciente = payload;
            return { ...state };
        case Types.Orden.Nuevo.General.Institucion.ENABLE_DISABLE:
            state.active.institucion_activo = payload;
            return { ...state };
        case Types.Orden.Nuevo.General.Institucion.SET_INSTITUCION:
            state.active.institucion = payload;
            return { ...state };
        case Types.Orden.Nuevo.General.Doctor.ENABLE_DISABLE:
            state.active.doctor_activo = payload;
            return { ...state };
        case Types.Orden.Nuevo.General.Doctor.SET_DOCTOR:
            state.active.doctor = payload;
            return { ...state };
        case Types.Orden.Nuevo.Analisis.ADD_ANALISIS:
            state.active.analisis = [...state.active.analisis, { ...initialStateOrdenAnalisis }];
            return { ...state };
        case Types.Orden.Nuevo.Analisis.SET_ANALISIS:
            state.active.analisis = state.active.analisis.map((i, index) =>
                index === payload.index ? payload.analisis : i);
            return { ...state };
        case Types.Orden.Nuevo.Analisis.REMOVE_ANALISIS:
            state.active.analisis = state.active.analisis.filter((_, index) => index !== payload);
            return { ...state };
        case Types.Orden.Nuevo.Facturacion.ENABLE_DISABLE:
            state.active.facturacion_activo = payload;
            return { ...state };
        case Types.Orden.Nuevo.Facturacion.SET_FACTURACION:
            state.active.facturacion = payload;
            return { ...state };
        default:
            return state;
    }
}