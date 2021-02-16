import React, { useState } from 'react'
import { initialStateDoctor } from '../../../../../helper/states/initialDoctor';
import { initialStateInsitucion } from '../../../../../helper/states/initialInstitucion';
import { initialStatePaciente } from '../../../../../helper/states/initialPaciente';
import { DoctorForm } from './DoctorForm';
import { InstitucionForm } from './InstitucionForm';
import { PacienteForm } from './PacienteForm'

export const GeneralForm = ({ next }) => {
    const [institucionActiva, setInstitucionActiva] = useState(true);
    const [doctorActivo, setDoctorActivo] = useState(true);
    const [paciente, setPaciente] = useState({
        ...initialStatePaciente,
        _id: '',
    });
    const [institucion, setInstitucion] = useState({
        ...initialStateInsitucion,
        _id: '',
    });
    const [doctor, setDoctor] = useState({
        ...initialStateDoctor,
        _id: '',
    });

    const submit = (e) => {
        e.preventDefault();
        if (!paciente._id || !paciente._id.length) {
            console.log('error paciente!');
            return
        }
        if (institucionActiva && (!institucion._id || !institucion._id.length)) {
            console.log('error institucion!');
            return
        }
        if (doctorActivo && (!doctor._id || !doctor._id.length)) {
            console.log('error doctor!');
            return
        }
        //TODO: Asignar datos a la orden
        next();
    }

    return (
        <form
            onSubmit={submit}
        >
            <PacienteForm
                paciente={paciente}
                setPaciente={setPaciente}
            />
            <InstitucionForm
                active={institucionActiva}
                setActive={setInstitucionActiva}
                institucion={institucion}
                setInstitucion={setInstitucion}
            />
            <DoctorForm
                active={doctorActivo}
                setActive={setDoctorActivo}
                doctor={doctor}
                setDoctor={setDoctor}
            />
            <div className='flex px-4 pb-3 space-x-2'>
                <button
                    className='flex-1 rounded py-2 font-medium uppercase text-gray-700 transition duration-300 active:bg-gray-200 focus:outline-none'
                    disabled
                >
                    Anterior
                    </button>
                <button
                    className='flex-1 rounded py-2 font-medium uppercase text-yellow-400 bg-gray-700 transition duration-300 active:bg-gray-900 focus:outline-none'
                >
                    Siguiente
                    </button>
            </div>
        </form>
    );
}
