import { initialStateOrdenAnalisis } from "./initialAnalisis";
import { initialStateDoctor } from "./initialDoctor";
import { initialStateInsitucion } from "./initialInstitucion";
import { initialStatePaciente } from "./initialPaciente";

const initialReducerOrden = {
    ordenes: [],
    active: null,
    cfdi: [],
    tipo_pago: [],
};

const initialStateOrden = {
    paciente: {
        ...initialStatePaciente,
        _id: '',
    },
    doctor: {
        ...initialStateDoctor,
        _id: '',
    },
    doctor_activo: true,
    institucion: {
        ...initialStateInsitucion,
        _id: '',
        active: true,
    },
    institucion_activo: true,
    analisis: [{ ...initialStateOrdenAnalisis }],
    facturacion: {
        rfc: '',
        correo: '',
        uso_cfdi: '',
        forma_pago: '',
    },
    facturacion_activo: true,
    totales: {
        subtotal: 0,
        descuento_pc: 0,
        descuento: 0,
        descuento_2: 0,
        comision_pc: 0,
        comision: 0,
        extras: 0,
        total: 0,
    },
    comentarios: '',
    fecha_entrega: '',
    pagos: [
        {
            pago: 0,
            tipo_pago: '',
        },
    ],
};

export {
    initialReducerOrden,
    initialStateOrden,
}