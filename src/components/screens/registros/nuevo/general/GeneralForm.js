import React, { useState } from 'react'
import { DoctorForm } from './DoctorForm';
import { InstitucionForm } from './InstitucionForm';
import { PacienteForm } from './PacienteForm'

export const GeneralForm = () => {
    const [institucionActiva, setInstitucionActiva] = useState(true);
    const [doctorActivo, setDoctorActivo] = useState(true);

    return (
        <div>
            <PacienteForm />
            <InstitucionForm
                active={institucionActiva}
                setActive={setInstitucionActiva}
            />
            <DoctorForm
                active={doctorActivo}
                setActive={setDoctorActivo}
            />
        </div>
    )
}
