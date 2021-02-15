import { faAt, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { RegularInput } from '../../../../forms/input-types/RegularInput';

export const PacienteForm = () => {
    return (
        <div className='rounded-xl shadow p-3 mx-4 mb-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 mb-3'>
                <p className='text-lg'>Paciente</p>
                <div className='md:col-span-2 lg:col-span-3'>
                    <RegularInput
                        placeholder='Institucion'
                        icon={faUser}
                    />
                </div>
                <div className='lg:col-span-2'>
                    <RegularInput
                        placeholder='Correo'
                        icon={faAt}
                        disabled
                    />
                </div>
                <RegularInput
                    placeholder='Teléfono'
                    icon={faPhoneAlt}
                    disabled
                />
            </div>
        </div>
    );
}
