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

    console.log(analisis, active);

    return (
        <div className='flex flex-1'>
            <SearchAnalisis />
            {
                active &&
                <FormAnalisis />
            }
        </div>
    );
}
