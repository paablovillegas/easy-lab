import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFetchAnalisis } from '../../../../redux/actions/analisis';
import { startFetchDoctores } from '../../../../redux/actions/doctor';
import { startFetchInstituciones } from '../../../../redux/actions/institucion';
import { nuevaOrden } from '../../../../redux/actions/orden/newOrden';
import { startFetchPacientes } from '../../../../redux/actions/paciente';
import { AnalisisForm } from './analisis/AnalisisForm';
import { FacturacionForm } from './facturacion/FacturacionForm';
import { GeneralForm } from './general/GeneralForm';
import { ResumenForm } from './resumen/ResumenForm';
import { Stepper } from './Stepper';

const steps = ['General', 'Análisis', 'Resumen', 'Pago'];

export const NuevaOrdenScreen = () => {
    const { active } = useSelector(state => state.orden);
    const [step, setStep] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startFetchPacientes())
        dispatch(startFetchDoctores())
        dispatch(startFetchInstituciones())
        dispatch(startFetchAnalisis())
        dispatch(nuevaOrden())
    }, [dispatch]);

    const next = () => setStep(step + 1);

    const prev = () => setStep(step - 1);

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
                                case 2: return <AnalisisForm
                                    next={next}
                                    prev={prev}
                                />
                                case 3: return <FacturacionForm
                                    next={next}
                                    prev={prev}
                                />
                                case 4: return <ResumenForm />
                                default: return '?'
                            }
                        })()}
                    </>
                }
            </div>
        </>
    )
}
