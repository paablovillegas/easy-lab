import { faChevronLeft, faChevronRight, faDollarSign, faFont, faPollH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearActive, startInsertAnalisis, startUpdateAnalisis } from '../../../../redux/actions/analisis';
import { RegularButton } from '../../../forms/input-types/RegularButton';
import { RegularInput } from '../../../forms/input-types/RegularInput';

export const FormAnalisis = ({ data = [], barraLateral, setBarraLateral }) => {
    const dispatch = useDispatch();
    const [analisis, setAnalisis] = useState(data);
    useEffect(() => {
        setAnalisis({ ...data })
    }, [data]);

    const handleChange = ({ target }) => {
        setAnalisis({
            ...analisis,
            [target.name]: target.value,
        });
    };

    const updateInsert = () => {
        const inputNumber = parseFloat(analisis.precio)
        if (inputNumber || inputNumber === 0) {
            setAnalisis({
                ...analisis,
                precio: inputNumber
            })
            if (analisis._id)
                dispatch(startUpdateAnalisis(analisis));
            else
                dispatch(startInsertAnalisis(analisis));
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
                                analisis._id
                                    ? 'Editar Paciente'
                                    : 'Nuevo Paciente'
                            }
                        </h1>
                        <h5
                            className="text-sm text-gray-500">
                            Fecha de registro: 15 Enero 2021
                        </h5>
                    </div>
                </div>
                <RegularInput
                    placeholder='Análisis'
                    inputType="text"
                    icon={faFont}
                    name='analisis'
                    value={analisis.analisis}
                    onChange={handleChange}
                />
                <RegularInput
                    placeholder='Precio'
                    title='Precio Estándar'
                    inputType="text"
                    icon={faDollarSign}
                    name='precio'
                    value={analisis.precio}
                    onChange={handleChange}
                />
                <RegularInput
                    placeholder='Descripción'
                    inputType="text"
                    icon={faPollH}
                    name='descripcion'
                    value={analisis.descripcion}
                    onChange={handleChange}
                />
                <div className={`mt-4 xl:col-start-auto xl:col-span-1 xl:mt-8
                    ${barraLateral ? 'lg:col-span-2' : 'sm:col-start-2 lg:col-start-3 lg:mt-8'}
                `}>
                    <RegularButton
                        title={analisis._id ? 'Actualizar' : 'Registrar'}
                        onClick={updateInsert}
                    />
                </div>
            </div>
        </div>
    );
}
