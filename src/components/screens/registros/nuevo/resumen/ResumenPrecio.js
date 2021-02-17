import React from 'react'
import { useSelector } from 'react-redux';
import { numberFormat } from '../../../../../helper/currency';

export const ResumenPrecio = () => {
    const orden = useSelector(state => state.orden.active);

    const subtotal = orden.analisis
        .reduce((acc, item) => acc += item.precio, 0);
    const descuento_pc = orden.institucion.descuento;
    const descuento = Math.round(subtotal * descuento_pc) / 100;
    const comision_pc = orden.doctor.comision;
    const comision = Math.round((subtotal - descuento) * comision_pc) / 100;
    const otros = 0;
    const total = subtotal - descuento;

    return (
        <React.Fragment>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Subtotal:</p>
                <p className='w-20 text-right'>{numberFormat(subtotal)}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Descuento ({descuento_pc}%):</p>
                <p className='w-20 text-right'>{numberFormat(descuento)}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Otros:</p>
                <p className='w-20 text-right'>{numberFormat(otros)}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Total:</p>
                <p className='w-20 text-right'>{numberFormat(total)}</p>
            </div>
            <div className='flex text-sm text-gray-400'>
                <p className='flex-1 text-right pr-6'>Comisión ({comision_pc}%):</p>
                <p className='w-20 text-right'>{numberFormat(comision)}</p>
            </div>
        </React.Fragment>
    )
}
