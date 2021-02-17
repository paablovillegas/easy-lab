import React from 'react'
import { useSelector } from 'react-redux';

export const ResumenDatos = () => {
    const { paciente, doctor, doctor_activo, institucion,
        institucion_activo } = useSelector(state => state.orden.active);

    return (
        <div className='flex'>
            <div className='flex-1 flex flex-col'>
                <p>Paciente</p>
                <p>{`${paciente.nombre} ${paciente.apellido_paterno} ${paciente.apellido_materno || ''}`}</p>
                {paciente.correo &&
                    <p className='text-gray-600'>
                        Correo: &nbsp;
                        <span className='text-gray-400'>{`${paciente.correo}`}</span>
                    </p>
                }
                {paciente.telefono &&
                    <p className='text-gray-600'>
                        Teléfono: &nbsp;
                        <span className='text-gray-400'>{`${paciente.telefono}`}</span>
                    </p>
                }
            </div>
            <div className='flex-1 flex flex-col space-y-2'>
                {institucion_activo &&
                    <div>
                        <h5>Institución</h5>
                        <p>{institucion.institucion}</p>
                    </div>
                }
                {doctor_activo &&
                    <div>
                        <h5>Doctor</h5>
                        <p className='text-gray-400'>
                            {`${doctor.nombre} ${doctor.apellido_paterno} ${doctor.apellido_materno || ''}`}
                        </p>
                        {doctor.correo &&
                            <p className='text-gray-600'>
                                Correo: &nbsp;
                                <span className='text-gray-400'>{`${doctor.correo}`}</span>
                            </p>
                        }
                        {doctor.telefono &&
                            <p className='text-gray-600'>
                                Teléfono: &nbsp;
                                <span className='text-gray-400'>{`${doctor.telefono}`}</span>
                            </p>
                        }
                    </div>
                }
            </div>
        </div>
    )
}
