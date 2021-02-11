import { faPlus, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { RoundInput } from '../../../forms/input-types/RoundInput'
import { ItemFile } from '../../../forms/search-bar/item-bar/ItemFile'

export const SearchInstitucion = ({data}) => {
    return (
        <div className="bg-gray-50 min-h-screen sm:h-screen flex flex-col relative">
            <div
                className="flex flex-row"
            >
                <h2 className="flex-grow text-3xl font-bold pl-3 mb-5">Instituciones</h2>
                <button className="mr-2 px-5 py-5 my-auto">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <div className="p-2">
                <RoundInput 
                    placeholder="Nombre, correo..."
                    icon={faVial}
                    size="xs"
                />
            </div>
            <p>Ordenar</p>
            <hr></hr>
            <div className="w-full flex-grow sm:mb-10 sm:overflow-y-auto">
                {
                    data.map((item, i) => {
                        return <ItemFile 
                            key={item.id_institucion} 
                            index={i} 
                            id={item.id_institucion}
                            title={item.institucion}
                            subtitle={item.comision.toString().concat(' %')}
                            route='/catalogos/instituciones/'
                        />
                    })
                }
            </div>
            <div className="w-full h-10 relative sm:absolute bottom-0 bg-gray-200 flex flex-col justify-center">
                <p className="text-sm text-center text-gray-600">Pacientes</p>
                <p className="text-xs text-center text-gray-500">{data.length}</p>
            </div>
        </div>
    )
}
