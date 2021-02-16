import { initialStateDoctor } from "./initialDoctor";
import { initialStateInsitucion } from "./initialInstitucion";
import { initialStatePaciente } from "./initialPaciente";

const initialReducerOrden = {
    ordenes: [],
    active: null,
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
    analisis: [],
};

export {
    initialReducerOrden,
    initialStateOrden,
}