import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startFetchAnalisis } from '../../../../redux/actions/analisis';
import { FormAnalisis } from './FormAnalisis';
import { SearchAnalisis } from './SearchAnalisis';

export const ScreenAnalisis = () => {
    const { analisis, active } = useSelector(state => state.analisis);
    const [mostrarBarra, setMostrarBarra] = useState(true);
    const dispatch = useDispatch();

    const hideShowBarra = () => setMostrarBarra(!mostrarBarra);

    useEffect(() => {
        dispatch(startFetchAnalisis());
    }, [dispatch]);

    return (
        <div className='flex flex-1'>
            <SearchAnalisis
                active={active}
                mostrarBarra={mostrarBarra}
                data={analisis}
            />
            {
                active &&
                <FormAnalisis
                    barraLateral={mostrarBarra}
                    setBarraLateral={hideShowBarra}
                    data={active}
                />
            }
        </div>
    );
}
