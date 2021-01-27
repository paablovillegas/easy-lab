import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { pacientesApi } from '../../../../sample/Pacientes'
import { SearchBar } from '../../../forms/search-bar/SearchBar'
import { FormInstituciones } from './FormInstituciones'

export const ScreenInstituciones = () => {

    return (
        <div className='flex flex-1'>
            <SearchBar data={pacientesApi} />
            <Switch>
                <Route path="/catalogos/instituciones/:id" component={FormInstituciones} />
            </Switch>
        </div>
    )
}
