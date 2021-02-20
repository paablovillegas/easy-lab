import React from 'react'
import { useSelector } from 'react-redux';
import { ItemOrden } from './ItemOrden';

export const ListaOrdenes = () => {
    const { ordenes } = useSelector(state => state.orden);

    return (
        <div className='px-4 py-5'>
            <table className='w-full max-w-full'>
                <thead className='bg-gray-700 text-yellow-400 text-left'>
                    <tr>
                        <th className='py-2.5 font-semibold w-20 text-center'>Folio</th>
                        <th className='py-2.5 font-semibold w-32 text-center'>Fecha</th>
                        <th className='py-2.5 font-semibold'>Paciente</th>
                        <th className='py-2.5 font-semibold'>Doctor</th>
                        <th className='py-2.5 font-semibold'>Institución</th>
                        <th className='py-2.5 font-semibold'>Análisis</th>
                        <th className='py-2.5 font-semibold w-24 text-center'>Precio</th>
                        <th className='py-2.5 font-semibold w-14 text-center'>Más</th>
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
