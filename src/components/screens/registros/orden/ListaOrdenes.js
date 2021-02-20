import React from 'react'
import { useSelector } from 'react-redux';
import { ItemOrden } from './ItemOrden';

export const ListaOrdenes = () => {
    const { ordenes } = useSelector(state => state.orden);

    console.log(ordenes);

    return (
        <div className='px-4 py-5'>
            <table className='w-full'>
                <thead className='bg-gray-700 text-yellow-400'>
                    <tr>
                        <th className='py-2 font-semibold'>Folio</th>
                        <th className='py-2 font-semibold'>Fecha</th>
                        <th className='py-2 font-semibold'>Paciente</th>
                        <th className='py-2 font-semibold'>Doctor</th>
                        <th className='py-2 font-semibold'>Institución</th>
                        <th className='py-2 font-semibold'>Análisis</th>
                        <th className='py-2 font-semibold'>Precio</th>
                        <th className='py-2 font-semibold'>Más</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordenes.map((i, index) => (
                            <ItemOrden
                                key={index}
                                item={i}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
