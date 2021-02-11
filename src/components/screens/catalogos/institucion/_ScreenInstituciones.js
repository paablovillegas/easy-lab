import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { startFetch } from '../../../../redux/actions/institucion'
import { FormInstituciones } from './FormInstituciones'
import { SearchInstitucion } from './SearchInstitucion'

export const ScreenInstituciones = () => {
    const dispatch = useDispatch();
    const { instituciones } = useSelector(state => state.institucion);

    const [mostrarBarra, setMostrarBarra] = useState(true);

    useEffect(() => {
        dispatch(startFetch());
    }, [dispatch]);

    return (
        <div className='flex flex-1'>
            <SearchInstitucion data={instituciones} mostrarBarra={mostrarBarra} />
            <Switch>
                <Route
                    path="/catalogos/instituciones/:id"
                    render={(p) =>
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
