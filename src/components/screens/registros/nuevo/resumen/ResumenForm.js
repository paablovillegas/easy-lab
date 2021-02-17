import React from 'react'
import { NextPrevious } from '../NextPrevious'
import { FacturacionForm } from './FacturacionForm';
import { ResumenAnalisis } from './ResumenAnalisis';
import { ResumenComentarios } from './ResumenComentarios';
import { ResumenDatos } from './ResumenDatos';
import { ResumenDoctor } from './ResumenDoctor';
import { ResumenFechas } from './ResumenFechas';
import { ResumenInstitucion } from './ResumenInstitucion';
import { ResumenPaciente } from './ResumenPaciente';
import { ResumenPrecio } from './ResumenPrecio';

export const ResumenForm = ({ next, prev }) => {
    const submit = (e) => {
        e.preventDefault();
        next();
    }

    return (
        <form
            className='grid md:grid-cols-2 lg:grid-cols-3'
            onSubmit={submit}
        >
            <h4 className='p-4 text-2xl text-gray-900 font-semibold md:col-span-2 lg:col-span-6'>Resumen</h4>
            <div className='md:col-span-2'>
                <ResumenPaciente />
            </div>
            <div className='md:col-span-2'>
                <ResumenDoctor />
            </div>
            <div className='md:col-span-2'>
                <ResumenInstitucion />
            </div>
            <div className='md:col-span-2 lg:col-span-3'>
                <ResumenFechas />
            </div>
            <div className='md:col-span-2 lg:col-span-3'>
                <FacturacionForm />
            </div>
            <div className='md:col-span-2 lg:col-span-6'>
                <ResumenAnalisis />
            </div>
            <div className='md:col-span-2 lg:col-span-3'>
                <ResumenComentarios />
            </div>
            <div className='md:col-span-2 lg:col-span-3'>
                <ResumenPrecio />
            </div>
            <div className='md:col-span-2 lg:col-span-6'>
                <NextPrevious previous={prev} />
            </div>
        </form>
    );
}
