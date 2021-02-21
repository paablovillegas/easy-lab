import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useSelector } from 'react-redux';
import { numberFormat } from '../../../../helper/currency';

export const AnalisisItem = () => {
    const active = useSelector(state => state.orden.active);

    const flatComponentes = (analisis) => analisis.componentes
        .reduce((acc, i) => acc + i.componente + ', ', '')
        .slice(0, -2);

    const resultCaptured = (analisis) => analisis.componentes
        .reduce((acc, i) => i.resultado ? acc + 1 : acc, 0) === analisis.componentes.length;

    return (
        <div className='lg:col-span-6 shadow rounded-xl p-2 m-3'>
            <div className='flex cursor-pointer select-none'>
                <h3 className='flex-grow text-2xl text-gray-700'>
                    Análisis: {active.analisis.length}
                </h3>
                <div className='my-auto pr-3'>
                <FontAwesomeIcon
                    icon={faChevronRight}
                />
                </div>
            </div>
            <table className='w-full mb-3'>
                <thead>
                    <tr className='border-b border-gray-400'>
                        <th colSpan="2" className='text-left pl-12 py-2 font-semibold'>Análisis</th>
                        <th className='text-right px-3 py-2 font-semibold'>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {active.analisis.map((i, index) => (
                        <tr key={index}>
                            <td className='w-9'>
                                <div className={`pt-3 pl-3 ${!resultCaptured(i) && 'hidden'}`}>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                    />
                                </div>
                            </td>
                            <td className='text-left px-3 pt-3'>
                                <p>{i.analisis}</p>
                                <p className='text-sm text-gray-400'>{flatComponentes(i)}</p>
                            </td>
                            <td className='text-right px-3 pt-3'>{numberFormat(i.precio)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
