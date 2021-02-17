import React from 'react'
import { NextPrevious } from '../NextPrevious'
import { FacturacionForm } from './FacturacionForm';
import { ResumenAnalisis } from './ResumenAnalisis';
import { ResumenDatos } from './ResumenDatos';
import { ResumenPrecio } from './ResumenPrecio';

export const ResumenForm = ({ next, prev }) => {
    const submit = (e) => {
        e.preventDefault();
        next();
    }

    return (
        <form
            onSubmit={submit}
        >
            <h4 className='p-4 text-2xl text-gray-900 font-semibold'>Resumen</h4>
            <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
                <ResumenDatos />
            </div>
            <FacturacionForm />
            <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
                <ResumenAnalisis />
            </div>
            <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
                <ResumenPrecio />
            </div>
            <NextPrevious previous={prev} />
        </form>
    );
}
