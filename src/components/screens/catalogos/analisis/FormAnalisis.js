import { faChevronLeft, faChevronRight, faDollarSign, faFont, faPollH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initialStateAnalisis } from '../../../../helper/states/initialAnalisis';
import { initialStateComponente } from '../../../../helper/states/initialComponente';
import { clearActive, startInsertAnalisis, startUpdateAnalisis } from '../../../../redux/actions/analisis';
import { RegularButton } from '../../../forms/input-types/RegularButton';
import { RegularInput } from '../../../forms/input-types/RegularInput';
import { ItemComponente } from './ItemComponente';

export const FormAnalisis = ({ data = [], barraLateral, setBarraLateral }) => {
    const { componentes } = useSelector(state => state.componente);
    const dispatch = useDispatch();
    const [analisis, setAnalisis] = useState({
        ...initialStateAnalisis,
        ...data,
    });

    useEffect(() => {
        setAnalisis({
            ...initialStateAnalisis,
            ...data,
        })
    }, [data]);

    const handleChange = ({ target }) => {
        setAnalisis({
            ...analisis,
            [target.name]: target.value,
        });
    };

    const handleChangeComponente = (target, index) => {
        const newComponent = componentes.find(i => i._id === target.value);
        const newComponents = [...analisis.componentes];
        newComponents[index] = newComponent;
        setAnalisis({
            ...analisis,
            componentes: newComponents,
        });
    };

    const nuevoComponente = () => {
        const newComponents = [...analisis.componentes];
        newComponents.push({
            ...initialStateComponente,
            _id: '',
        });
        setAnalisis({
            ...analisis,
            componentes: newComponents,
        });
    };

    const deleteComponente = (i) => {
        const newComponents = analisis.componentes.filter((item, index) => index !== i);
        setAnalisis({
            ...analisis,
            componentes: newComponents,
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

    const submit = (e) => {
        e.preventDefault();
        if (analisis.componentes.length === 0) {
            console.log('Es necesario al menos un analisis');
            return;
        }
        const ids = analisis.componentes.reduce((acc, { _id }) => {
            if (!_id.length || !acc.includes(_id))
                return [...acc, _id];
            return acc;
        }, []);
        if (ids.length !== analisis.componentes.length) {
            console.log('Componentes repetidos!');
            return;
        }
        const analisisAux = {
            ...analisis,
            componentes: ids,
            descripcion: (analisis.descripcion.length && analisis.descripcion) || undefined
        }
        if (analisisAux._id)
            dispatch(startUpdateAnalisis(analisisAux));
        else
            dispatch(startInsertAnalisis(analisisAux));
    }

    const clearInstitucion = () => dispatch(clearActive());

    return (
        <div className='flex-1'>
            <form
                className={`pt-3 px-2 space-x-3.5 grid grid-cols-1 sm:max-h-screen sm:overflow-y-auto xl:grid-cols-3
                    ${barraLateral ? 'sm:grid-cols-1 lg:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}
                autoComplete='off'
                onSubmit={submit}
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
                <div className={`${barraLateral ? 'xl:col-span-2' : 'lg:col-span-2'}`}>
                    <RegularInput
                        placeholder='Análisis'
                        inputType="text"
                        icon={faFont}
                        name='analisis'
                        value={analisis.analisis}
                        onChange={handleChange}
                        required
                    />
                </div>
                <RegularInput
                    placeholder='Precio'
                    title='Precio Estándar'
                    inputType="text"
                    icon={faDollarSign}
                    name='precio'
                    value={analisis.precio}
                    onChange={handleChange}
                    required
                />
                <div className={`${barraLateral ? 'lg:col-span-2 xl:col-span-3' : 'sm:col-span-2 lg:col-span-3'}`}>
                    <RegularInput
                        placeholder='Descripción'
                        inputType="text"
                        icon={faPollH}
                        name='descripcion'
                        value={analisis.descripcion}
                        onChange={handleChange}
                    />
                </div>
                <div
                    className={`${barraLateral ? 'lg:col-span-2 xl:col-span-3' : 'sm:col-span-2 lg:col-span-3'}`}
                >
                    <h4 className='mt-4 text-xl text-yellow-400 font-semibold uppercase'>Componentes</h4>
                    <hr className='my-1' />
                </div>
                {
                    analisis.componentes.map((item, i) =>
                        <ItemComponente
                            key={item._id + i}
                            barraLateral={barraLateral}
                            componente={item}
                            index={i}
                            onChange={handleChangeComponente}
                            deleteComponent={deleteComponente}
                        />
                    )
                }
                <button
                    className={'py-1 my-1 w-1/2 text-sm place-self-center border border-gray-500 '
                        + 'rounded-full focus:outline-none transition duration-300 hover:shadow-md '
                        + 'active:bg-gray-100'}
                    type='button'
                    onClick={nuevoComponente}
                >
                    Nuevo Componente
                </button>
                <div className={`mt-4 xl:col-start-auto xl:col-span-1 xl:mt-8 pb-2
                    ${barraLateral ? 'lg:col-span-2' : 'sm:col-start-2 lg:col-start-3 lg:mt-8'}
                `}>
                    <RegularButton title={analisis._id ? 'Actualizar' : 'Registrar'} />
                </div>
            </form>
        </div>
    );
}
