import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { startFetchDoctores } from '../../../../redux/actions/doctor';
import { startFetchInstituciones } from '../../../../redux/actions/institucion';
import { startFetchPacientes } from '../../../../redux/actions/paciente';
import { GeneralForm } from './general/GeneralForm';
import { Stepper } from './Stepper';

const steps = ['General', 'Análisis', 'Facturación', 'Total'];

export const NuevaOrdenScreen = () => {
    const dispatch = useDispatch();
    const [step, setStep] = useState(1);

    useEffect(() => {
        dispatch(startFetchPacientes())
        dispatch(startFetchDoctores())
        dispatch(startFetchInstituciones())
    }, [dispatch]);

    const next = () => setStep(step + 1);

    const prev = () => setStep(step - 1);

    return (
        <>
            <div className='flex flex-1 flex-col space-y-3 overflow-y-auto'>
                <h1 className='text-3xl px-4 pt-3 font-semibold text-gray-800'>Nueva Orden</h1>
                <Stepper
                    steps={steps}
                    step={step}
                    setStep={setStep}
                />
                {(() => {
                    switch (step) {
                        case 1: return <GeneralForm />
                        case 2: return <p>BBBBB</p>
                        case 3: return <p>CCCCC</p>
                        case 4: return <p>DDDDD</p>
                        default: return <p>?</p>
                    }
                })()}
                <div className='flex px-4 pb-3 space-x-2'>
                    <button
                        className='flex-1 rounded py-2 font-medium uppercase text-gray-700 transition duration-300 active:bg-gray-200 focus:outline-none'
                        disabled={step === 1}
                        onClick={prev}
                    >
                        Anterior
                    </button>
                    <button
                        className='flex-1 rounded py-2 font-medium uppercase text-yellow-400 bg-gray-700 transition duration-300 active:bg-gray-900 focus:outline-none'
                        disabled={step === steps.length}
                        onClick={next}
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </>
    )
}
