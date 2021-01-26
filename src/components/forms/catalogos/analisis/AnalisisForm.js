import { faChevronLeft, faChevronRight, faDollarSign, faFont, faPollH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { RegularButton } from '../../../input-types/RegularButton'
import { RegularInput } from '../../../input-types/RegularInput'

export const AnalisisForm = ({barraLateral, setBarraLateral, id}) => {

    const verOcularBarra = () => {
        setBarraLateral(state => !state);
    }
    return (
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
                    onClick={verOcularBarra}
                >
                    <FontAwesomeIcon 
                        icon={barraLateral ?  faChevronLeft : faChevronRight} 
                        size="3x"
                        className="my-auto ml-1 mr-2"
                    />
                </button>
                <div className="flex flex-col">
                    <h1 className="text-5xl font-bold">
                            Análisis {id && id.toString().padStart(4, '0')}
                    </h1>
                    <h5 
                        className="text-sm text-gray-500">
                            Fecha de registro: 15 Enero 2021
                    </h5>
                </div>
            </div>
            <RegularInput placeholder="Anáilisis" inputType="text" icon={faFont} />
            <RegularInput placeholder="Precio" title="Precio Estándar" inputType="number" icon={faDollarSign} />
            <RegularInput placeholder="Descripción" inputType="text" icon={faPollH} />
            <div>
                <p>Componentes del análisis</p>
            </div>
            <div className={`my-4 xl:col-start-2 xl:col-span-2 ${barraLateral  ? 'lg:col-span-2' : 'sm:col-span-2 lg:col-start-3 lg:col-span-1'}`}>
                <RegularButton title="Actualizar" />
            </div>
        </div>
    )
}
