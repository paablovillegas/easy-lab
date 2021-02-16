import React from 'react'
import { NextPrevious } from '../NextPrevious';
import { DoctorForm } from './DoctorForm';
import { InstitucionForm } from './InstitucionForm';
import { PacienteForm } from './PacienteForm'

export const GeneralForm = ({ next }) => {

    const submit = (e) => {
        e.preventDefault();
        next();
    };

    return (
        <form onSubmit={submit}>
            <PacienteForm />
            <InstitucionForm />
            <DoctorForm />
            <NextPrevious pDisabled />
        </form>
    );
}
