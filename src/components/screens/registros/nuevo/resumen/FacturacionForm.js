import { faAt, faCreditCard, faReceipt, faTasks } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { enableDisableFacturacion, setFacturacion } from '../../../../../redux/actions/orden/newOrden';
import { RegularInput } from '../../../../forms/input-types/RegularInput';
import { SelectInput } from '../../../../forms/input-types/SelectInput';
import { ToggleSwitch } from '../../../../forms/input-types/ToggleSwitch';

const defaultTipoPago = {
    value: '',
    name: '-- Seleccionar Tipo de Pago --',
};

const defaultCFDI = {
    value: '',
    name: '-- Seleccionar Uso CFDI --',
};

export const FacturacionForm = () => {
    const { facturacion, facturacion_activo: active } = useSelector(state => state.orden.active);
    const { cfdi, tipo_pago } = useSelector(state => state.orden);
    const dispatch = useDispatch();

    const [itemsCFDI, setItemsCFDI] = useState([]);
    const [itemsTipoPago, setItemsTipoPago] = useState([]);

    useEffect(() => {
        let mapa = tipo_pago.map(i => ({
            name: i.forma_pago,
            value: i.forma_pago,
        }));
        mapa = [defaultTipoPago, ...mapa];
        setItemsTipoPago(mapa);
    }, [tipo_pago]);

    useEffect(() => {
        let mapa = cfdi.map(i => ({
            value: i.uso,
            name: i.uso,
        }));
        mapa = [defaultCFDI, ...mapa];
        setItemsCFDI(mapa);
    }, [cfdi]);

    const setActive = (active) => dispatch(enableDisableFacturacion(active));

    const handleTipoPago = ({ target }) => {
        const item = itemsTipoPago.find(i => i.value === target.value);
        if (item)
            dispatch(setFacturacion({
                ...facturacion,
                [target.name]: item.name,
            }));
    }

    const handleCFDI = ({ target }) => {
        const item = itemsCFDI.find(i => i.value === target.value);
        if (item)
            dispatch(setFacturacion({
                ...facturacion,
                [target.name]: item.name,
            }));
    }

    const handleChange = ({ target }) => {
        dispatch(setFacturacion({
            ...facturacion,
            [target.name]: target.value,
        }));
    };

    return (
        <div className={`rounded-xl p-3 mx-4 mb-3 ${active ? 'shadow' : 'shadow-sm'}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 md:space-x-4 mb-3'>
                <div className='md:col-span-2'>
                    <ToggleSwitch
                        title='Facturación'
                        active={active}
                        setActive={setActive}
                    />
                </div>
                <RegularInput
                    icon={faReceipt}
                    placeholder='RFC'
                    name='rfc'
                    value={facturacion.rfc}
                    onChange={handleChange}
                    disabled={!active}
                    required
                />
                <RegularInput
                    icon={faAt}
                    placeholder='Correo electrónico'
                    name='correo'
                    value={facturacion.correo}
                    onChange={handleChange}
                    inputType='email'
                    disabled={!active}
                    required
                />
                <SelectInput
                    icon={faTasks}
                    name='uso_cfdi'
                    onChange={handleCFDI}
                    title='Uso CFDI'
                    options={itemsCFDI}
                    value={facturacion.uso_cfdi}
                    disabled={!active}
                    required
                />
                <SelectInput
                    icon={faCreditCard}
                    name='forma_pago'
                    onChange={handleTipoPago}
                    title='Forma de pago'
                    options={itemsTipoPago}
                    value={facturacion.forma_pago}
                    disabled={!active}
                    required
                />
            </div>
        </div>
    )
}