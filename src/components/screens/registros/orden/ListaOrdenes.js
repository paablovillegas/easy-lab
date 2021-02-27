import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startFetchBusquedaAvanzada, startFetchDefault } from '../../../../redux/actions/orden';
import { SelectInput } from '../../../forms/input-types/SelectInput';
import { ItemOrden } from './ItemOrden';

export const ListaOrdenes = () => {
    const { ordenes } = useSelector(state => state.orden);
    const [listaPaginas, setListaPaginas] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (ordenes.paginas) {
            setListaPaginas([]);
            for (let i = 0; i < ordenes.paginas; i++) {
                setListaPaginas(j => [...j, { value: i + 1, name: i + 1 }])
            }
        }
    }, [ordenes]);

    const fectchInfo = (pagina) => {
        if (ordenes.type === 'default') {
            // dispatch(startFetchDefault(pagina));
        } else {
            //dispatch(startFetchBusquedaAvanzada(pagina));
        }
    }

    const changePagina = ({ target }) =>
        fectchInfo(target.value);

    const prevPage = () =>
        fectchInfo(ordenes.pagina + 1);

    const nextPage = () =>
        fectchInfo(ordenes.pagina - 1);

    console.log(ordenes)

    return (
        <div className='px-4 py-5'>
            <div className='flex p-2'>
                <p className='flex-grow my-auto text-gray-700'>Pagina {ordenes.pagina} de {ordenes.paginas}</p>
                <div className='text-right my-2 mr-6'>
                    <p className='inline-block p-2'>Elementos:</p>
                    <button className='p-2 hover:bg-gray-300'>10</button>
                    <button className='p-2 hover:bg-gray-300'>25</button>
                    <button className='p-2 hover:bg-gray-300'>50</button>
                </div>
                <button
                    className='px-3 mt-2 mr-2 focus:outline-none hover:bg-gray-200 rounded'
                    disabled={ordenes.pagina === 1}
                    onClick={prevPage}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <SelectInput
                    options={listaPaginas}
                    onChange={changePagina}
                />
                <button
                    className='px-3 mt-2 ml-2 focus:outline-none hover:bg-gray-200 rounded'
                    disabled={ordenes.pagina === ordenes.paginas}
                    onClick={nextPage}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <table className='w-full max-w-full'>
                <thead className='bg-gray-700 text-yellow-400 text-left'>
                    <tr>
                        <th className='py-2.5 font-semibold w-20 text-center'>Folio</th>
                        <th className='hidden sm:table-cell py-2.5 font-semibold w-32 text-center'>Fecha</th>
                        <th className='py-2.5 font-semibold'>Paciente</th>
                        <th className='hidden md:table-cell py-2.5 font-semibold'>Doctor</th>
                        <th className='hidden lg:table-cell py-2.5 font-semibold'>Institución</th>
                        <th className='hidden md:table-cell py-2.5 font-semibold'>Análisis</th>
                        <th className='hidden sm:table-cell py-2.5 font-semibold w-24 text-center'>Precio</th>
                        <th className='py-2.5 font-semibold w-14 text-center'>Más</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ordenes.ordenes.map((i, index) => (
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
