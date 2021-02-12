import { faAt, faChevronLeft, faChevronRight, faFileInvoiceDollar, faPhoneAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { clearActive, startInsertDoctor, startUpdateDoctor } from '../../../../redux/actions/doctor';
import { RegularButton } from '../../../forms/input-types/RegularButton';
import { RegularInput } from '../../../forms/input-types/RegularInput';

export const FormDoctor = ({ data, setBarraLateral, barraLateral }) => {
    const dispatch = useDispatch();
    const [doctor, setDoctor] = useState(data);

    useEffect(() => {
        setDoctor({ ...data });
    }, [data]);

    const handleChange = ({ target }) => {
        setDoctor({
            ...doctor,
            [target.name]: target.value,
        });
    };

    const updateInsert = () => {
        const inputNumber = parseFloat(doctor.comision)
        if (inputNumber || inputNumber === 0) {
            setDoctor({
                ...doctor,
                comision: inputNumber
            })
            if (doctor._id) dispatch(startUpdateDoctor(doctor));
            else dispatch(startInsertDoctor(doctor));
        } else {
            //TODO: Mostrar error!
            console.log('error');
        }
    };

    const clearInstitucion = () => dispatch(clearActive());

    console.log(doctor);

    return (
        <div className='flex-1'>
            <div
                className={`pt-3 px-2 space-x-3.5 grid grid-cols-1 sm:max-h-screen sm:overflow-y-auto xl:grid-cols-3
                    ${barraLateral ? 'sm:grid-cols-1 lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}
            `}>
                <div
                    className={`flex flex-row text-gray-900 xl:col-span-3
                        ${barraLateral ? 'sm:col-span-1 lg:col-span-2' : 'sm:col-span-2 lg:col-span-3'}
                `}>
                    <button
                        className="mx-2 my-1 rounded transform duration-200 focus:outline-none active:bg-gray-100 sm:hidden"
                        onClick={clearInstitucion}
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
                                doctor._id
                                    ? 'Editar Doctor'
                                    : 'Nuevo Doctor'
                            }
                        </h1>
                        <h5
                            className="text-sm text-gray-500">
                            Fecha de registro: 15 Enero 2021
                        </h5>
                    </div>
                </div>
                <RegularInput
                    placeholder='Nombre'
                    inputType="text"
                    icon={faUser}
                    name='nombre'
                    value={doctor.nombre}
                    onChange={handleChange}
                />
                <RegularInput
                    placeholder='Apellido Paterno'
                    inputType="text"
                    icon={faUser}
                    name='apellido_paterno'
                    value={doctor.apellido_paterno}
                    onChange={handleChange}
                />
                <RegularInput
                    placeholder='Apellido Materno'
                    inputType="text"
                    icon={faUser}
                    name='apellido_materno'
                    value={doctor.apellido_materno}
                    onChange={handleChange}
                />
                <RegularInput
                    placeholder='Correo Electrónico'
                    inputType="mail"
                    icon={faAt}
                    name='correo'
                    value={doctor.correo}
                    onChange={handleChange}
                />
                <RegularInput
                    placeholder='Teléfono'
                    inputType="phone"
                    icon={faPhoneAlt}
                    name='telefono'
                    value={doctor.telefono}
                    onChange={handleChange}
                />
                <RegularInput
                    placeholder='Comision'
                    inputType="number"
                    icon={faFileInvoiceDollar}
                    name='comision'
                    value={doctor.comision}
                    onChange={handleChange}
                />
                <div className={`mt-4 xl:col-start-auto xl:col-span-1 xl:mt-8
                    ${barraLateral ? 'lg:col-span-2' : 'sm:col-start-2 lg:col-start-3 lg:mt-8'}
                `}>
                    <RegularButton
                        title={doctor._id ? 'Actualizar' : 'Registrar'}
                        onClick={updateInsert}
                    />
                </div>
            </div>
        </div>
    );
}
