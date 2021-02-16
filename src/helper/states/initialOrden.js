import { initialStatePaciente } from "./initialPaciente";

const initialStateOrden = {
    paciente: {
        ...initialStatePaciente,
        _id: '',
    },
    doctor: {
        _id: '',
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        correo: '',
        telefono: '',
        comision: 0,
    },
    institucion: {
        _id: '',
        institucion: '',
        descuento: 0,
    }
};

export {
    initialStateOrden,
}