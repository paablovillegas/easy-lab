import { faChevronLeft, faChevronRight, faIndustry, faPercentage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearActive, startInsertInstitucion, startUpdateInstitucion } from '../../../../redux/actions/institucion'
import { RegularButton } from '../../../forms/input-types/RegularButton'
import { RegularInput } from '../../../forms/input-types/RegularInput'

export const FormInstituciones = ({ data, barraLateral, setBarraLateral }) => {
    const dispatch = useDispatch();

    const [institucion, setInstitucion] = useState(data);

    useEffect(() => {
        setInstitucion({ ...data });
    }, [data]);

    const handleChange = ({ target }) => {
        setInstitucion({
            ...institucion,
            [target.name]: target.value
        });
    };

    const updateInsert = () => {
        const inputNumber = parseFloat(institucion.descuento)
        if (inputNumber || inputNumber === 0) {
            setInstitucion({
                ...institucion,
                descuento: inputNumber
            })
            if (institucion._id) dispatch(startUpdateInstitucion(institucion));
            else dispatch(startInsertInstitucion(institucion));
        } else {
            //TODO: Mostrar error!
            console.log('error');
        }
    };

    const clearInstitucion = () => dispatch(clearActive());

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
                                institucion._id
                                    ? 'Editar Institucion'
                                    : 'Nueva Institucion'
                            }
                        </h1>
                        <h5
                            className="text-sm text-gray-500">
                            Fecha de registro: 15 Enero 2021
                        </h5>
                    </div>
                </div>
                <RegularInput
                    placeholder="Institucion"
                    inputType="text"
                    icon={faIndustry}
                    name='institucion'
                    value={institucion.institucion}
                    onChange={handleChange}
                />
                <RegularInput
                    placeholder="Descuento"
                    inputType="number"
                    icon={faPercentage}
                    name='descuento'
                    value={institucion.descuento}
                    onChange={handleChange}
                />
                <div className={`mt-4 xl:col-start-auto xl:col-span-1 xl:mt-8
                    ${barraLateral ? 'lg:col-span-2' : 'sm:col-start-2 lg:col-start-3 lg:mt-8'}
                `}>
                    <RegularButton
                        title={institucion._id ? 'Actualizar' : 'Registrar'}
                        onClick={updateInsert}
                    />
                </div>
            </div>
        </div>
    )
}
