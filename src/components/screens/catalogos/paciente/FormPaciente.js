import { faChevronLeft, faChevronRight, faUser, faCalendarDay, faVenusMars, faAt, faPhoneAlt, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fromInputDate, maxFecha, toInputDate } from '../../../../helper/fechas';
import { initialStatePaciente, opcionesGenero } from '../../../../helper/states/initialPaciente';
import { clearActive, startInsertPaciente, startUpdatePaciente } from '../../../../redux/actions/paciente';
import { RegularButton } from '../../../forms/input-types/RegularButton';
import { RegularInput } from '../../../forms/input-types/RegularInput';
import { SelectInput } from '../../../forms/input-types/SelectInput';

export const FormPaciente = ({ data, setBarraLateral, barraLateral }) => {
    const dispatch = useDispatch();
    const [paciente, setPaciente] = useState({
        ...initialStatePaciente,
        ...data,
        fecha_nacimiento: toInputDate(data.fecha_nacimiento),
    });

    useEffect(() => {
        setPaciente({
            ...initialStatePaciente,
            ...data,
            fecha_nacimiento: toInputDate(data.fecha_nacimiento),
        });
    }, [data]);

    const handleChange = ({ target }) => {
        setPaciente({
            ...paciente,
            [target.name]: target.value,
        });
    };

    const updateInsert = (e) => {
        e.preventDefault();
        const pacienteAux = {
            ...paciente,
            apellido_materno: (paciente.apellido_materno.length && paciente.apellido_materno) || undefined,
            correo: (paciente.correo.length && paciente.correo) || undefined,
            telefono: (paciente.telefono.length && paciente.telefono) || undefined,
            direccion: (paciente.direccion.length && paciente.direccion) || undefined,
            fecha_nacimiento: fromInputDate(paciente.fecha_nacimiento),
        };
        if (pacienteAux._id)
            dispatch(startUpdatePaciente(pacienteAux));
        else
            dispatch(startInsertPaciente(pacienteAux));
    }

    const clearInstitucion = () => dispatch(clearActive());

    return (
        <div className='flex-1'>
            <form
                className={`pt-3 px-2 space-x-3.5 grid grid-cols-1 sm:max-h-screen sm:overflow-y-auto xl:grid-cols-3
                    ${barraLateral ? 'sm:grid-cols-1 lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}
                autoComplete='off'
                onSubmit={updateInsert}
            >
                <div
                    className={`flex flex-row text-gray-900 xl:col-span-3
                        ${barraLateral ? 'sm:col-span-1 lg:col-span-2' : 'sm:col-span-2 lg:col-span-3'}
                `}>
                    <button
                        className="mx-2 my-1 rounded transform duration-200 focus:outline-none active:bg-gray-100 sm:hidden"
                        onClick={clearInstitucion}
                        type='button'
                    >
                        <FontAwesomeIcon
                            icon={barraLateral ? faChevronLeft : faChevronRight}
                            size="3x"
                            className="my-auto ml-1 mr-2"
                        />
                    </button>
                    <button
                        className="mx-2 my-1 rounded transform duration-200 focus:outline-none active:bg-gray-100 hidden sm:inline-block"
                        onClick={setBarraLateral}
                        type='button'
                    >
                        <FontAwesomeIcon
                            icon={barraLateral ? faChevronLeft : faChevronRight}
                            size="3x"
                            className="my-auto ml-1 mr-2"
                        />
                    </button>
                    <div className="flex flex-col">
                        <h1 className="text-5xl font-bold">
                            {
                                paciente._id
                                    ? 'Editar Paciente'
                                    : 'Nuevo Paciente'
                            }
                        </h1>
                        <h5
                            className="text-sm text-gray-500">
                            Última actualización: {maxFecha(paciente)}
                        </h5>
                    </div>
                </div>
                <RegularInput
                    placeholder='Nombre'
                    inputType="text"
                    icon={faUser}
                    name='nombre'
                    value={paciente.nombre}
                    onChange={handleChange}
                    required
                />
                <RegularInput
                    placeholder='Apellido Paterno'
                    inputType="text"
                    icon={faUser}
                    name='apellido_paterno'
                    value={paciente.apellido_paterno}
                    onChange={handleChange}
                    required
                />
                <RegularInput
                    placeholder='Apellido Materno'
                    inputType="text"
                    icon={faUser}
                    name='apellido_materno'
                    value={paciente.apellido_materno}
                    onChange={handleChange}
                />
                <RegularInput
                    placeholder="Fecha de Nacimiento"
                    inputType="date"
                    icon={faCalendarDay}
                    name='fecha_nacimiento'
                    value={paciente.fecha_nacimiento}
                    onChange={handleChange}
                    required
                />
                <SelectInput
                    title="Género"
                    icon={faVenusMars}
                    name="genero"
                    value={paciente.genero}
                    options={opcionesGenero}
                    onChange={handleChange}
                    required
                />
                <RegularInput
                    placeholder='Correo Electrónico'
                    inputType="mail"
                    icon={faAt}
                    name='correo'
                    value={paciente.correo}
                    onChange={handleChange}
                />
                <RegularInput
                    placeholder='Teléfono'
                    inputType="phone"
                    icon={faPhoneAlt}
                    name='telefono'
                    value={paciente.telefono}
                    onChange={handleChange}
                />
                <div className={`xl:col-span-2 ${!barraLateral ? 'lg:col-span-2' : ''}`}>
                    <RegularInput
                        placeholder="Dirección"
                        inputType="text"
                        icon={faHome}
                        name="direccion"
                        value={paciente.direccion}
                        onChange={handleChange}
                    />
                </div>
                <div className={`mt-4 xl:col-start-auto xl:col-span-1 xl:mt-8
                    ${barraLateral ? 'lg:col-span-2' : 'sm:col-start-2 lg:col-start-3 lg:mt-8'}
                `}>
                    <RegularButton title={paciente._id ? 'Actualizar' : 'Registrar'} />
                </div>
            </form>
        </div>
    );
}
