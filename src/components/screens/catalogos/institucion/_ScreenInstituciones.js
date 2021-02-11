import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { FormInstituciones } from './FormInstituciones'
import { SearchInstitucion } from './SearchInstitucion'

export const ScreenInstituciones = () => {

    fetch('http://localhost:4000/lab/instituciones')
        .then(value => console.log(value.body));

    return (
        <div className='flex flex-1'>
            <SearchInstitucion data={[]} />
            <Switch>
                <Route path="/catalogos/instituciones/:id" component={FormInstituciones} />
            </Switch>
        </div>
    )
}
