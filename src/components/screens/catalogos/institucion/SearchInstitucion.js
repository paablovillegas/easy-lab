import { faPlus, faVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { RoundInput } from '../../../forms/input-types/RoundInput'
import { ItemFile } from '../../../forms/search-bar/item-bar/ItemFile'

export const SearchInstitucion = ({data, mostrarBarra}) => {
    const history = useHistory().location.pathname.split('/').reverse();
    let hasId = history[0] !== 'instituciones';

    const [stringSearch, setStringSearch] = useState('');
    const setSearch = ({target}) => {
        setStringSearch(target.value)
    }
    const filter = ({institucion, descuento}) => {
        return institucion.toLowerCase().includes(stringSearch) ||
            descuento.toString().includes(stringSearch)
    }

    return (
        <div className={`bg-gray-50 min-h-full flex-col relative sm:h-screen sm:flex sm:w-auto
             ${hasId ? 'hidden' : 'w-screen  flex'}
             ${mostrarBarra ? '' : 'sm:hidden'}
        `}>
            <div
                className="flex flex-row"
            >
                <h2 className="flex-grow text-3xl font-bold px-3 my-3">Instituciones</h2>
                <Link className="mr-2 px-5 py-3 my-auto focus:outline-none transition rounded active:bg-gray-200"
                    to='/catalogos/instituciones/nuevo'
                    replace
                >
                    <FontAwesomeIcon icon={faPlus} />
                </Link>
            </div>
            <div className="p-2">
                <RoundInput 
                    placeholder="Institucion, comisión..."
                    icon={faVial}
                    size="xs"
                    value={stringSearch}
                    onChange={setSearch}
                />
            </div>
            <p>Ordenar</p>
            <hr></hr>
            <div className="w-full flex-grow sm:mb-10 sm:overflow-y-auto">
                {
                    data.filter(item => filter(item))
                        .map((item, i) => {
                            return <ItemFile 
                                key={item._id} 
                                index={i} 
                                id={item._id}
                                title={item.institucion}
                                subtitle={item.descuento.toString().concat(' %')}
                                route='/catalogos/instituciones/'
                            />
                        })
                }
            </div>
            <div className="w-full h-10 relative sm:absolute bottom-0 bg-gray-200 flex flex-col justify-center">
                <p className="text-sm text-center text-gray-600">Instituciones</p>
                <p className="text-xs text-center text-gray-500">{data.length}</p>
            </div>
        </div>
    )
}
