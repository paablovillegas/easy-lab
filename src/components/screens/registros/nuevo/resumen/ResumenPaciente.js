import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFechaEntrega } from '../../../../../redux/actions/orden/newOrden';
import { RegularInput } from '../../../../forms/input-types/RegularInput';

export const ResumenPaciente = () => {
    const { paciente, fecha_entrega } = useSelector(state => state.orden.active);
    const dispatch = useDispatch();

    const handleChange = ({ target }) => {
        dispatch(setFechaEntrega(target.value));
    }

    return (
        <div className='rounded-xl p-3 mx-4 mb-3 shadow flex flex-col space-y-2'>
            <p className='text-xl text-gray-800'>Datos del paciente</p>
            <p className='text-gray-500'>{`${paciente.nombre} ${paciente.apellido_paterno} ${paciente.apellido_materno || ''}`}</p>
            <p className='text-gray-500'>{paciente.correo || ''}</p>
            <p className='text-gray-500'>{paciente.telefono || ''}</p>
            <RegularInput
                icon={faCalendar}
                inputType='date'
                placeholder='Fecha de entrega'
                name='fecha_entrega'
                value={fecha_entrega}
                onChange={handleChange}
                required
            />
        </div>
    );
}
