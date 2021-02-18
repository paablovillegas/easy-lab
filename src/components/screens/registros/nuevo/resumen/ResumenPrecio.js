import { faCreditCard, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { numberFormat } from '../../../../../helper/currency';
import { setPago } from '../../../../../redux/actions/orden/newOrden';
import { RegularInput } from '../../../../forms/input-types/RegularInput';
import { SelectInput } from '../../../../forms/input-types/SelectInput';

const defaultTipoPago = {
    value: '',
    name: '-- Seleccionar Tipo de Pago --',
};

export const ResumenPrecio = () => {
    const { active: orden, tipo_pago } = useSelector(state => state.orden);
    const dispatch = useDispatch();

    const [itemsTipoPago, setItemsTipoPago] = useState([]);

    useEffect(() => {
        let mapa = tipo_pago.map(i => ({
            name: i.forma_pago,
            value: i.forma_pago,
        }));
        mapa = [defaultTipoPago, ...mapa];
        setItemsTipoPago(mapa);
    }, [tipo_pago]);

    const subtotal = orden.analisis
        .reduce((acc, item) => acc += item.precio, 0);
    const descuento_pc = (orden.institucion_activo && orden.institucion.descuento) || 0;
    const descuento = Math.round(subtotal * descuento_pc) / 100;
    const comision_pc = (orden.doctor_activo && orden.doctor.comision) || 0;
    const comision = Math.round((subtotal - descuento) * comision_pc) / 100;
    const descuento_2 = parseFloat(orden.totales.descuento_2) || 0;
    const extras = parseFloat(orden.totales.extras) || 0;
    const total = subtotal - descuento - descuento_2 + extras;

    const handleChangePago = ({ target }) =>
        dispatch(setPago({
            ...orden.pagos[0],
            [target.name]: target.value,
        }));

    return (
        <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
            <p className='text-xl text-gray-800'>Total</p>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Subtotal:</p>
                <p className='w-20 text-right'>{numberFormat(subtotal)}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Descuento ({descuento_pc}%):</p>
                <p className='w-20 text-right'>{numberFormat(descuento)}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Descuento Extra:</p>
                <p className='w-20 text-right'>{numberFormat(descuento_2)}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 text-right pr-6'>Extras:</p>
                <p className='w-20 text-right'>{numberFormat(extras)}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 text-right pr-6 font-semibold'>Total:</p>
                <p className='w-20 text-right font-semibold'>{numberFormat(total)}</p>
            </div>
            <div className='flex text-sm text-gray-400'>
                <p className='flex-1 text-right pr-6'>Comisión ({comision_pc}%):</p>
                <p className='w-20 text-right'>{numberFormat(comision)}</p>
            </div>
            <p className='text-xl text-gray-800'>Pago</p>
            <RegularInput
                icon={faDollarSign}
                placeholder='Cantidad'
                name='pago'
                value={orden.pagos[0].pago}
                onChange={handleChangePago}
                required
            />
            <SelectInput
                icon={faCreditCard}
                name='tipo_pago'
                title='Tipo de Pago'
                onChange={handleChangePago}
                options={itemsTipoPago}
                value={orden.pagos[0].tipo_pago}
                required
            />
        </div>
    )
}
