import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { startFetchDefault } from '../../../../redux/actions/orden';
import { BuscadorForm } from './BuscadorForm'
import { ListaOrdenes } from './ListaOrdenes'

export const ScreenOrden = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startFetchDefault())
    }, [dispatch]);

    return (
        <div className='flex flex-1 flex-col space-y-3 sm:max-h-screen sm:overflow-y-auto'>
            <BuscadorForm />
            <ListaOrdenes />
        </div>
    )
}
