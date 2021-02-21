import React from 'react'
import { useSelector } from 'react-redux';
import { numberFormat } from '../../../../helper/currency'
import { toDataDate } from '../../../../helper/fechas';

export const BalanceItem = () => {
    const { totales, pagos } = useSelector(state => state.orden.active);

    const getBalance = () => totales.total -
        pagos.reduce((acc, i) => acc += i.pago, 0);

    return (
        <div className='shadow rounded-xl p-2.5 m-3'>
            <h3 className='text-xl text-gray-700 font-medium'>Resumen</h3>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Subtotal:</p>
                <p className='w-20 text-right'>{numberFormat(totales.subtotal)}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Descuento ({totales.descuento_pc}%):</p>
                <p className='w-20 text-right'>{numberFormat(totales.descuento)}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Descuento Extra:</p>
                <p className='w-20 text-right'>{numberFormat(totales.descuento_2)}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Extras:</p>
                <p className='w-20 text-right'>{numberFormat(totales.extras)}</p>
            </div>
            <div className='flex text-sm text-gray-400'>
                <p className='flex-1 text-right pr-6'>Comisión ({totales.comision_pc}%):</p>
                <p className='w-20 text-right'>{numberFormat(totales.comision)}</p>
            </div>
            <div className='flex mb-3'>
                <p className='flex-1 text-right pr-6 font-semibold'>Total:</p>
                <p className='w-20 text-right font-semibold'>{numberFormat(totales.total)}</p>
            </div>
            {pagos.map((i, index) => (
                <div
                    className='flex'
                    key={index}
                >
                    <p className='flex-1 text-right pr-6'>Pago ({toDataDate(i.fecha_pago)}):</p>
                    <p className='w-20 text-right'>{numberFormat(i.pago)}</p>
                </div>
            ))}
            <div className='flex mt-3'>
                <p className='flex-1 text-right pr-6 font-semibold'>Balance:</p>
                <p className='w-20 text-right font-semibold'>{numberFormat(getBalance())}</p>
            </div>
        </div>
    )
}
