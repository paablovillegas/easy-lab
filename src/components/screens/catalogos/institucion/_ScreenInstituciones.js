import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startFetch } from '../../../../redux/actions/institucion'
import { FormInstituciones } from './FormInstituciones'
import { SearchInstitucion } from './SearchInstitucion'

export const ScreenInstituciones = () => {
    const { instituciones, active } = useSelector(state => state.institucion);
    const [mostrarBarra, setMostrarBarra] = useState(true);
    const dispatch = useDispatch();

    const hideShowBarra = () => setMostrarBarra(!mostrarBarra);

    useEffect(() => {
        dispatch(startFetch());
    }, [dispatch]);

    return (
        <div className='flex flex-1'>
            <SearchInstitucion
                data={instituciones}
                active={active}
                mostrarBarra={mostrarBarra}
            />
            {
                active &&
                <FormInstituciones
                    data={active}
                    barraLateral={mostrarBarra}
                    setBarraLateral={hideShowBarra}
                />
            }
        </div>
    )
}
