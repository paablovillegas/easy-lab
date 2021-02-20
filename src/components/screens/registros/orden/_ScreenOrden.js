import React from 'react'
import { useSelector } from 'react-redux'
import { BuscadorForm } from './BuscadorForm'
import { ListaOrdenes } from './ListaOrdenes'

export const ScreenOrden = () => {
    const { ordenes } = useSelector(state => state.orden);

    console.log(ordenes)
    return (
        <div className='flex flex-1 flex-col space-y-3 sm:max-h-screen sm:overflow-y-auto'>
            <BuscadorForm />
            {ordenes.length > 0 &&
                <ListaOrdenes />
            }
        </div>
    )
}
