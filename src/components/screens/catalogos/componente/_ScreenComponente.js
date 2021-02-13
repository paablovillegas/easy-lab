import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startFetchComponentes } from '../../../../redux/actions/componente';
import { FormComponente } from './FormComponente';
import { SearchComponente } from './SearchComponente';

export const ScreenComponente = () => {
    const { componentes, active } = useSelector(state => state.componente);
    const [mostrarBarra, setMostrarBarra] = useState(true);
    const dispatch = useDispatch();

    const hideShowBarra = () => setMostrarBarra(!mostrarBarra);

    useEffect(() => {
        dispatch(startFetchComponentes())
    }, [dispatch]);

    return (
        <div className='flex flex-1'>
            <SearchComponente 
                data={componentes}
                active={active}
                mostrarBarra={mostrarBarra}
            />
            {
                active &&
                <FormComponente 
                    data={active}
                    barraLateral={mostrarBarra}
                    setBarraLateral={hideShowBarra}
                />
            }
        </div>
    )
}
