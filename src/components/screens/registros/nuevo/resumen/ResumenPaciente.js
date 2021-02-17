import React from 'react'
import { useSelector } from 'react-redux';

export const ResumenPaciente = () => {
    const { paciente } = useSelector(state => state.orden.active);
    console.log(paciente);
    return (
        <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
            pax
        </div>
    );
}
