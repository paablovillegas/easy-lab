import { faChevronDown, faCreditCard, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startInsertPago } from '../../../../redux/actions/orden'
import { startGetTiposPago } from '../../../../redux/actions/orden/newOrden'
import { RegularButton } from '../../../forms/input-types/RegularButton'
import { RegularInput } from '../../../forms/input-types/RegularInput'
import { SelectInput } from '../../../forms/input-types/SelectInput'

const defaultTipoPago = {
    value: '',
    name: '-- Seleccionar Tipo de Pago --',
};

const initialStatePago = {
    pago: '',
    tipo_pago: '',
};

export const NuevoPagoForm = () => {
    const { tipo_pago, active: { _id } } = useSelector(state => state.orden);
    const dispatch = useDispatch();

    const [itemsTipoPago, setItemsTipoPago] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [nuevoPago, setNuevoPago] = useState(initialStatePago);

    useEffect(() => {
        dispatch(startGetTiposPago())
    }, [dispatch]);


    useEffect(() => {
        let mapa = tipo_pago.map(i => ({
            name: i.forma_pago,
            value: i.forma_pago,
        }));
        mapa = [defaultTipoPago, ...mapa];
        setItemsTipoPago(mapa);
    }, [tipo_pago]);

    const handleChange = ({ target }) => {
        setNuevoPago({
            ...nuevoPago,
            [target.name]: target.value,
        });
    };

    const handleShowForm = () => setShowForm(!showForm);

    const addNuevoPago = (e) => {
        e.preventDefault();
        handleShowForm();
        dispatch(startInsertPago(_id, nuevoPago));
        setNuevoPago({ ...initialStatePago });
    }

    return (
        <div className='shadow rounded-xl p-2 m-3 cursor-pointer'>
            <div
                className='flex'
                onClick={handleShowForm}
            >
                <h3 className='text-xl text-gray-700 font-medium flex-grow select-none'>
                    Nuevo Pago
                </h3>
                <div className='my-auto pr-3'>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                    />
                </div>
            </div>
            <form
                className={`${!showForm && 'hidden'}`}
                onSubmit={addNuevoPago}
            >
                <RegularInput
                    icon={faDollarSign}
                    inputType='number'
                    placeholder='Cantidad'
                    name='pago'
                    value={nuevoPago.pago}
                    onChange={handleChange}
                    required
                />
                <SelectInput
                    icon={faCreditCard}
                    name='tipo_pago'
                    title='Tipo de Pago'
                    options={itemsTipoPago}
                    value={nuevoPago.tipo_pago}
                    onChange={handleChange}
                    required
                />
                <div className='mt-2'>
                    <RegularButton title='Registrar' />
                </div>
            </form>
        </div>
    )
}
