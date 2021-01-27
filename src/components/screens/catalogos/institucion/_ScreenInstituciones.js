import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { institucionesApi } from '../../../../sample/Instituciones'
import { FormInstituciones } from './FormInstituciones'
import { SearchInstitucion } from './SearchInstitucion'

export const ScreenInstituciones = () => {

    return (
        <div className='flex flex-1'>
            <SearchInstitucion data={institucionesApi} />
            <Switch>
                <Route path="/catalogos/instituciones/:id" component={FormInstituciones} />
            </Switch>
        </div>
    )
}
