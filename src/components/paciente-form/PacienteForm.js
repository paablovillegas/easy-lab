import { faAt, faCalendarDay, faChevronLeft, faHome, faPhone, faUser, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { RegularButton } from '../forms/RegularButton'
import { RegularInput } from '../forms/RegularInput'
import { SelectInput } from '../forms/SelectInput'

export const PacienteForm = ({id}) => {
    return (
        <div className="px-2 space-x-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-row text-gray-900 lg:col-span-2">
                <button
                    className="mx-2 my-1 rounded transform duration-200 focus:outline-none active:bg-gray-100"
                >
                    <FontAwesomeIcon 
                        icon={faChevronLeft} 
                        size="3x"
                        className="my-auto ml-1 mr-2"
                    />
                </button>
                <div 
                    className="flex flex-col"
                >
                    <h1 
                        className="text-5xl font-bold">
                            Paciente {id.toString().padStart(4, '0')}
                    </h1>
                    <h5 
                        className="text-sm text-gray-500">
                            Fecha de registro: 15 Enero 2021
                    </h5>
                </div>
            </div>
            <RegularInput placeholder="Nombre" inputType="text" icon={faUser} />
            <RegularInput placeholder="Apellido Paterno" inputType="text" icon={faUser} />
            <RegularInput placeholder="Apellido Materno" inputType="text" icon={faUser} />
            <RegularInput placeholder="Fecha de Nacimiento" inputType="date" icon={faCalendarDay} />
            <SelectInput title="Género" icon={faVenusMars} />
            <RegularInput placeholder="Correo electrónico" inputType="mail" icon={faAt} />
            <div className="md:col-span-2 lg:col-span-1">
                <RegularInput 
                    placeholder="Teléfono" 
                    inputType="phone" 
                    icon={faPhone} 
                />
            </div>
            <div className="md:col-span-2">
                <RegularInput 
                    placeholder="Dirección" 
                    inputType="text" 
                    icon={faHome} 
                />
            </div>
            <div className="my-3 md:col-start-2 md:row-start-1 md:mt-1.5 lg:col-start-3">
                <RegularButton title="Actualizar" />
            </div>
        </div>
    )
}
