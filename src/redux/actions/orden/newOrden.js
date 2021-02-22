import { fetchConToken } from "../../../helper/fetch";
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

export const enableDisableFacturacion = (active) => ({
    type: Types.Orden.Nuevo.Facturacion.ENABLE_DISABLE,
    payload: active,
});

export const setFacturacion = (facturacion) => ({
    type: Types.Orden.Nuevo.Facturacion.SET_FACTURACION,
    payload: facturacion,
});

export const setComentarios = (comentarios) => ({
    type: Types.Orden.Nuevo.SET_COMENTARIOS,
    payload: comentarios,
});

export const setTotales = (totales) => ({
    type: Types.Orden.Nuevo.Totales.SET_TOTALES,
    payload: totales,
});

export const setFechaEntrega = (fecha_entrega) => ({
    type: Types.Orden.Nuevo.SET_FECHA_ENTREGA,
    payload: fecha_entrega,
});

export const setPago = (pago) => ({
    type: Types.Orden.Nuevo.SET_PAGO,
    payload: pago,
});

export const startGetTiposPago = () =>
    (dispatch) => fetchConToken('ordenes/extras/formas_pago')
        .then(({ data }) => dispatch(getTiposPago(data)));

const getTiposPago = (tipos) => ({
    type: Types.Orden.Fetch.TIPO_PAGO,
    payload: tipos,
});

export const startGetUsoCFDI = () =>
    (dispatch) => fetchConToken('ordenes/extras/uso_cfdi')
        .then(({ data }) => dispatch(getCFDI(data)));


const getCFDI = (cfdi) => ({
    type: Types.Orden.Fetch.CFDI,
    payload: cfdi,
});
