import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from '../../../../helper/alerts';
import { fromInputDate } from '../../../../helper/fechas';
import { validateOrden } from '../../../../helper/validation/validation-orden';
import { startFetchAnalisis } from '../../../../redux/actions/analisis';
import { startFetchDoctores } from '../../../../redux/actions/doctor';
import { startFetchInstituciones } from '../../../../redux/actions/institucion';
import { startInsertOrden } from '../../../../redux/actions/orden';
import { nuevaOrden, setTotales, startGetTiposPago, startGetUsoCFDI } from '../../../../redux/actions/orden/newOrden';
import { startFetchPacientes } from '../../../../redux/actions/paciente';
import { AnalisisForm } from './analisis/AnalisisForm';
import { FacturacionForm } from './facturacion/FacturacionForm';
import { GeneralForm } from './general/GeneralForm';
import { ResumenForm } from './resumen/ResumenForm';
import { Stepper } from './Stepper';

const steps = ['General', 'Análisis', 'Resumen', 'Comprobantes'];

export const NuevaOrdenScreen = () => {
    const { active, created } = useSelector(state => state.orden);
    const [step, setStep] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startFetchPacientes())
        dispatch(startFetchDoctores())
        dispatch(startFetchInstituciones())
        dispatch(startFetchAnalisis())
        dispatch(nuevaOrden())
        dispatch(startGetUsoCFDI())
        dispatch(startGetTiposPago())
    }, [dispatch]);

    useEffect(() => {
        if (created)
            setStep(s => s + 1);
    }, [created]);

    const next = () => setStep(step + 1);

    const prev = () => setStep(step - 1);

    const validate = () => {
        if (new Date().getTime() > fromInputDate(active.fecha_entrega)) {
            toast.fire({
                title: 'Fecha de entrega anterior a hoy!',
                icon: 'error',
            });
            return;
        }
        if (active.facturacion_activo) {
            if (active.facturacion.forma_pago !== active.pagos[0].tipo_pago) {
                toast.fire({
                    title: 'Tipos de pago diferentes para facturación!',
                    icon: 'error'
                });
                return;
            }
        }
        dispatch(setTotales(getTotales()));
        const newOrden = validateOrden({ ...active });
        if (newOrden) {
            dispatch(startInsertOrden(newOrden));
        }
    };

    const getTotales = () => {
        const subtotal = active.analisis.reduce((acc, item) => acc += item.precio, 0);
        const descuento_pc = (active.institucion_activo && active.institucion.descuento) || 0;
        const descuento = Math.round(subtotal * descuento_pc) / 100;
        const comision_pc = (active.doctor_activo && active.doctor.comision) || 0;
        const comision = Math.round((subtotal - descuento) * comision_pc) / 100;
        const descuento_2 = parseFloat(active.totales.descuento_2) || 0;
        const extras = parseFloat(active.totales.extras) || 0;
        const total = subtotal - descuento - descuento_2 + extras;
        return {
            subtotal,
            descuento_pc,
            descuento,
            descuento_2,
            comision_pc,
            comision,
            extras,
            total,
        };
    }

    return (
        <>
            <div className='flex flex-1 flex-col space-y-3 sm:max-h-screen sm:overflow-y-auto'>
                {
                    active &&
                    <>
                        <h1 className='text-3xl px-4 pt-3 font-semibold text-gray-800'>Nueva Orden</h1>
                        <Stepper
                            steps={steps}
                            step={step}
                            setStep={setStep}
                        />
                        {(() => {
                            switch (step) {
                                case 1: return <GeneralForm next={next} />
                                case 2: return <AnalisisForm next={next} prev={prev} />
                                case 3: return <ResumenForm next={validate} prev={prev} />
                                case 4: return <FacturacionForm next={next} prev={prev} />
                                default: return '?'
                            }
                        })()}
                    </>
                }
            </div>
        </>
    )
}
