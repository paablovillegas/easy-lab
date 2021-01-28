import { faChevronLeft, faChevronRight, faIndustry, faPercentage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { institucionesApi, institucionInit } from '../../../../sample/Instituciones'
import { RegularButton } from '../../../forms/input-types/RegularButton'
import { RegularInput } from '../../../forms/input-types/RegularInput'

export const FormInstituciones = ({barraLateral, setBarraLateral}) => {
    const history = useHistory()
    let { id } = useParams()
    const [institucion, setInstitucion] = useState(institucionInit)

    useEffect(() => {
        setInstitucion({
            ...institucionInit,
            ...institucionesApi.find(i => i.id_institucion === parseInt(id))
        })
    }, [id])

    const handleBarra = () => setBarraLateral(state => !state);

    const handleChange = ({ target }) => {
        setInstitucion({
            ...institucion,
            [target.name]: target.value
        });
    }

    const click = () => {
        const inputNumber = parseFloat(institucion.comision)
        if (inputNumber || inputNumber === 0) {
            setInstitucion({
                ...institucion,
                comision: inputNumber
            })
            history.replace('/catalogos/instituciones');
        } else {
            console.log('error');
        }
    }

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
                        className="mx-2 my-1 rounded transform duration-200 focus:outline-none active:bg-gray-100"
                        onClick={ handleBarra }
                    >
                        <FontAwesomeIcon
                            icon={barraLateral ? faChevronLeft : faChevronRight}
                            size="3x"
                            className="my-auto ml-1 mr-2"
                        />
                    </button>
                    <div className="flex flex-col">
                        <h1 className="text-5xl font-bold">
                            Institución {id && id.toString().padStart(4, '0')}
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
                    name='comision'
                    value={institucion.comision}
                    onChange={handleChange}
                />
                <div className={`my-4 xl:col-start-2 xl:col-span-2 ${barraLateral ? 'lg:col-span-2' : 'sm:col-span-2 lg:col-start-3 lg:col-span-1'}`}>
                    <RegularButton title="Actualizar" onClick={click} />
                </div>
            </div>
        </div>
    )
}
