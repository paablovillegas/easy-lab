import { faAt, faCalendarDay, faChevronLeft, faChevronRight, faHome, faPhone, faUser, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { RegularButton } from '../../forms/input-types/RegularButton'
import { RegularInput } from '../../forms/input-types/RegularInput'
import { SelectInput } from '../../forms/input-types/SelectInput'

export const PacienteForm = ({barraLateral, setBarraLateral, paciente, handleInputChange }) => {
    const opcionesGenero = [
        {
            value: 'M',
            name: 'Masculino'
        },
        {
            value: 'F',
            name: 'Femenino'
        },
    ]

    const handle = ({target}) => {
        handleInputChange({
            type: 'change',
            payload: target
        })
    }

    const verOcularBarra = () => {
        setBarraLateral(state => !state);
    }

    return (
        <div
            className={`pt-3 px-2 space-x-3.5 grid grid-cols-1 sm:max-h-screen sm:overflow-y-auto xl:grid-cols-3
                ${barraLateral ? 'sm:grid-cols-1 lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}
            `}>
            <div className={`flex flex-row text-gray-900 xl:col-span-3
                ${barraLateral ? 'sm:col-span-1 lg:col-span-2' : 'sm:col-span-2 lg:col-span-3'}
            `}>
                <button
                    className="mx-2 my-1 rounded transform duration-200 focus:outline-none active:bg-gray-100"
                    onClick={verOcularBarra}
                >
                    <FontAwesomeIcon
                        icon={barraLateral ?  faChevronLeft : faChevronRight}
                        size="3x"
                        className="my-auto ml-1 mr-2"
                    />
                </button>
                <div
                    className="flex flex-col"
                >
                    <h1
                        className="text-5xl font-bold">
                            Paciente {paciente.id_paciente && paciente.id_paciente.toString().padStart(4, '0')}
                    </h1>
                    <h5
                        className="text-sm text-gray-500">
                            Fecha de registro: 15 Enero 2021
                    </h5>
                </div>
            </div>
            <RegularInput
                placeholder="Nombre"
                inputType="text"
                icon={faUser}
                name="nombre"
                value={paciente.nombre}
                onChange={handle}
            />
            <RegularInput
                placeholder="Apellido Paterno"
                inputType="text"
                icon={faUser}
                name="apellido_paterno"
                value={paciente.apellido_paterno}
                onChange={handle}
            />
            <RegularInput
                placeholder="Apellido Materno"
                inputType="text"
                icon={faUser}
                name="apellido_materno"
                value={paciente.apellido_materno}
                onChange={handle}
            />
            <RegularInput
                placeholder="Fecha de Nacimiento"
                inputType="date"
                icon={faCalendarDay}
            />
            <SelectInput 
                title="Género" 
                icon={faVenusMars}
                name="genero"
                value={paciente.genero}
                options={opcionesGenero}
                onChange={handle}
            />
            <RegularInput 
                placeholder="Correo electrónico" 
                inputType="mail" 
                icon={faAt} 
                name="correo"
                value={paciente.correo}
                onChange={handle}
            />
            <div>
                <RegularInput
                    placeholder="Teléfono"
                    inputType="phone"
                    icon={faPhone}
                    name="telefono"
                    value={paciente.telefono}
                    onChange={handle}
                />
            </div>
            <div className={`xl:col-span-2 ${!barraLateral ? 'lg:col-span-2' : ''}`}>
                <RegularInput
                    placeholder="Dirección"
                    inputType="text"
                    icon={faHome}
                    name="direccion"
                    value={paciente.direccion}
                    onChange={handle}
                />
            </div>
            <div className={`my-4 xl:col-start-2 xl:col-span-2 ${barraLateral  ? 'lg:col-span-2' : 'sm:col-span-2 lg:col-start-3 lg:col-span-1'}`}>
                <RegularButton title="Actualizar" />
            </div>
        </div>
    );
}
