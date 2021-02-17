import React from 'react'
import { useSelector } from 'react-redux';

export const ResumenDoctor = () => {
    const { doctor, doctor_activo: active } = useSelector(state => state.orden.active);
    console.log(doctor, active);
    return (
        <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
            doc
        </div>
    );
}
