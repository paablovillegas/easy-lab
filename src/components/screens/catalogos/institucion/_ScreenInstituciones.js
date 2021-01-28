import React, { useReducer, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { listReducer, ListTypes } from '../../../../hooks/reducers/listReducer'
import { institucionesApi } from '../../../../sample/Instituciones'
import { FormInstituciones } from './FormInstituciones'
import { SearchInstitucion } from './SearchInstitucion'

export const ScreenInstituciones = () => {
    const [instituciones, dispatchInstituciones] = useReducer(listReducer, [])
    const [mostrarBarra, setMostrarBarra] = useState(true);

    setTimeout(() => {
        dispatchInstituciones({
            type: ListTypes.FETCH,
            payload: institucionesApi,
        })
    }, 1500);

    return (
        <div className='flex flex-1'>
            <SearchInstitucion data={instituciones} mostrarBarra={mostrarBarra} />
            <Switch>
                <Route 
                    path="/catalogos/instituciones/:id" 
                    render={ (p) => 
                        <FormInstituciones {...p} 
                            mostrarBarra={mostrarBarra}
                            setMostrarBarra={setMostrarBarra}
                        />
                    }
                />
            </Switch>
        </div>
    )
}
