import { initialStateOrden } from "../../../helper/states/initialOrden";
import { Types } from "../../types/types";

export const nuevaOrden = () => ({
    type: Types.Orden.Nuevo.START_ORDEN,
    payload: initialStateOrden,
})

export const setPaciente = (paciente) => ({
    type: Types.Orden.Nuevo.General.SET_PACIENTE,
    payload: paciente
});