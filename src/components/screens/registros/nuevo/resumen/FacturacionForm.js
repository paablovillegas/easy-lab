import { faAt, faReceipt, faTasks } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { enableDisableFacturacion, setFacturacion } from '../../../../../redux/actions/orden/newOrden';
import { RegularInput } from '../../../../forms/input-types/RegularInput';
import { ToggleSwitch } from '../../../../forms/input-types/ToggleSwitch';

export const FacturacionForm = () => {
    const { facturacion, facturacion_activo: active } = useSelector(state => state.orden.active);
    const dispatch = useDispatch();

    const setActive = (active) => dispatch(enableDisableFacturacion(active));

    const handleChange = ({ target }) => {
        dispatch(setFacturacion({
            ...facturacion,
            [target.name]: target.value,
        }));
    };

    return (
        <div className={`rounded-xl p-3 mx-4 mb-3 ${active ? 'shadow' : 'shadow-sm'}`}>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 mb-3'>
                <div className='md:col-span-2 lg:col-span-3'>
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
                <RegularInput
                    icon={faTasks}
                    placeholder='Uso CFDI'
                    name='uso_cfdi'
                    value={facturacion.uso_cfdi}
                    onChange={handleChange}
                    disabled={!active}
                    required
                />
            </div>
        </div>
    )
}