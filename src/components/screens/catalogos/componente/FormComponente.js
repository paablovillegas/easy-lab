import { faBook, faChevronLeft, faChevronRight, faFlask } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { maxFecha } from '../../../../helper/fechas';
import { initialStateComponente } from '../../../../helper/states/initialComponente';
import { clearActive } from '../../../../redux/actions/componente';
import { RegularButton } from '../../../forms/input-types/RegularButton';
import { RegularInput } from '../../../forms/input-types/RegularInput';

export const FormComponente = ({ data, barraLateral, setBarraLateral }) => {
    const dispatch = useDispatch();

    const [componente, setComponente] = useState(data);

    useEffect(() => {
        setComponente({
            ...initialStateComponente,
            ...data,
        })
    }, [data]);

    const handleChange = ({target}) => {
        setComponente({
            ...componente,
            [target.name]: target.value,
        });
    };

    const updateInsert = (e) => {
        e.preventDefault();
    }

    const clearComponente = () => dispatch(clearActive());

    return (
        <div className='flex-1'>
            <form
                className={`pt-3 px-2 space-x-3.5 grid grid-cols-1 sm:max-h-screen sm:overflow-y-auto xl:grid-cols-3
                    ${barraLateral ? 'sm:grid-cols-1 lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}
                onSubmit={updateInsert}
                autoComplete='off'
            >
                <div
                    className={`flex flex-row text-gray-900 xl:col-span-3
                        ${barraLateral ? 'sm:col-span-1 lg:col-span-2' : 'sm:col-span-2 lg:col-span-3'}
                `}>
                    <button
                        className="mx-2 my-1 rounded transform duration-200 focus:outline-none active:bg-gray-100 sm:hidden"
                        onClick={clearComponente}
                        type="button"
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
                        type="button"
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
                                componente._id
                                    ? 'Editar Institucion'
                                    : 'Nueva Institucion'
                            }
                        </h1>
                        <h5
                            className="text-sm text-gray-500">
                            Última modificación: {maxFecha(componente)}
                        </h5>
                    </div>
                </div>
                <RegularInput
                    placeholder="Institucion"
                    inputType="text"
                    icon={faFlask}
                    name='componente'
                    value={componente.componente}
                    onChange={handleChange}
                    required
                />
                <RegularInput
                    placeholder="Descuento"
                    inputType="number"
                    icon={faBook}
                    name='descuento'
                    value={componente.descuento}
                    onChange={handleChange}
                />
                <div className={`mt-4 xl:col-start-auto xl:col-span-1 xl:mt-8
                    ${barraLateral ? 'lg:col-span-2' : 'sm:col-start-2 lg:col-start-3 lg:mt-8'}
                `}>
                    <RegularButton title={componente._id ? 'Actualizar' : 'Registrar'} />
                </div>
            </form>
        </div>
    );
}
