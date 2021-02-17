import React from 'react'
import { NextPrevious } from '../NextPrevious'
import { FacturacionForm } from './FacturacionForm';
import { ResumenAnalisis } from './ResumenAnalisis';
import { ResumenComentarios } from './ResumenComentarios';
import { ResumenDoctorInstitucion } from './ResumenDoctorInstitucion';
import { ResumenPaciente } from './ResumenPaciente';
import { ResumenPrecio } from './ResumenPrecio';

export const ResumenForm = ({ next, prev }) => {
    const submit = (e) => {
        e.preventDefault();
        next();
    }

    return (
        <form className='grid md:grid-cols-2' onSubmit={submit}>
            <ResumenPaciente />
            <ResumenDoctorInstitucion />
            <div className='md:col-span-2'>
                <FacturacionForm />
            </div>
            <div className='md:col-span-2'>
                <ResumenAnalisis />
            </div>
            <ResumenComentarios />
            <ResumenPrecio />
            <div className='md:col-span-2'>
                <NextPrevious previous={prev} />
            </div>
        </form>
    );
}
