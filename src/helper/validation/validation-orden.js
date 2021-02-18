import { fromInputDate } from "../fechas";

export const validateOrden = (orden) => {
    try {
        if (!orden.doctor_activo)
            orden.doctor = undefined;
        delete orden.doctor_activo;
        if (!orden.institucion_activo)
            orden.institucion = undefined;
        delete orden.institucion_activo;
        if (!orden.facturacion_activo)
            orden.facturacion = undefined;
        delete orden.facturacion_activo;
        orden.fecha_entrega = fromInputDate(orden.fecha_entrega);
        if (!orden.comentarios)
            delete orden.comentarios;
        return orden;
    } catch (err) {
        console.log(err)
    }
    return false;
}