import React from 'react'
import { useSelector } from 'react-redux';

export const InfoItem = () => {
    const { paciente, institucion, doctor, comentarios, facturacion } = useSelector(state => state.orden.active);
    return (
        <>
            <div className='shadow rounded-xl p-2 m-3 lg:col-span-3'>
                <h3 className='text-xl text-gray-700 font-medium'>Paciente</h3>
                <p>{`${paciente.nombre} ${paciente.apellido_paterno} ${paciente.apellido_materno || ''}`}</p>
                <p>{`${paciente.correo || ''}`}</p>
                <p>{`${paciente.telefono || ''}`}</p>

                {comentarios &&
                    <>
                        <p className='text-xl text-gray-700'>Comentarios</p>
                        <p>{comentarios}</p>
                    </>
                }
            </div>
            <div className='lg:col-span-3'>
                <div className='shadow rounded-xl p-2 m-3'>
                    <h3 className='text-xl text-gray-700 font-medium'>Doctor</h3>
                    <p>{`${doctor.nombre} ${doctor.apellido_paterno} ${doctor.apellido_materno || ''}`}</p>
                    <p>{`${doctor.correo || ''}`}</p>
                    <p>{`${doctor.telefono || ''}`}</p>
                </div>
                <div className='shadow rounded-xl p-2 m-3'>
                    <h3 className='text-xl text-gray-700 font-medium'>Institucion</h3>
                    <p>{institucion.institucion}</p>
                </div>
            </div>
            {facturacion &&
                <div className='lg:col-span-6 shadow rounded-xl p-2 m-3'>
                    <h3 className='text-xl text-gray-700 font-medium'>Facturacion</h3>
                    <p>{facturacion.rfc}</p>
                    <p>{facturacion.correo}</p>
                    <p>{facturacion.uso_cfdi}</p>
                    <p>{facturacion.forma_pago}</p>
                </div>
            }
        </>
    );
}
