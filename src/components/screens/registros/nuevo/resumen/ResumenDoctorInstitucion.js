import React from 'react'
import { useSelector } from 'react-redux';

export const ResumenDoctorInstitucion = () => {
    const { doctor, doctor_activo, institucion, institucion_activo } = useSelector(state => state.orden.active);

    return (
        <div className='rounded-xl p-3 mx-4 mb-3 shadow flex flex-col space-y-2'>
            {doctor_activo &&
                <>
                    <p className='text-xl text-gray-800'>Doctor</p>
                    <p className='text-gray-500'>{`${doctor.nombre} ${doctor.apellido_paterno} ${doctor.apellido_materno || ''}`}</p>
                    <p className='text-gray-500'>{doctor.correo || ''}</p>
                    <p className='text-gray-500'>{doctor.telefono || ''}</p>
                </>
            }
            {institucion_activo &&
                <>
                    <p className='text-xl text-gray-800'>Institución</p>
                    <p className='text-gray-500'>{institucion.institucion}</p>
                </>
            }
        </div>
    );
}
