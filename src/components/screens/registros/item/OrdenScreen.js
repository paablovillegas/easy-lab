import { faCheckSquare, faChevronRight, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nameCapitalized } from '../../../../helper/capitalize';
import { numberFormat, pad } from '../../../../helper/currency';
import { toDataDate } from '../../../../helper/fechas';
import { startFetchItem } from '../../../../redux/actions/orden';
import { LoadingState } from '../../loading/LoadingState';

export const OrdenScreen = () => {
    const active = useSelector(state => state.orden.active);
    const dispatch = useDispatch();
    const { uid } = useParams();

    const getBalance = () => active.totales.total -
        active.pagos.reduce((acc, i) => acc += i.pago, 0);

    const flatComponentes = (analisis) => analisis.componentes
        .reduce((acc, i) => acc + i.componente + ', ', '')
        .slice(0, -2);

    useEffect(() => {
        dispatch(startFetchItem(uid));
    }, [dispatch, uid]);

    if (!active)
        return <LoadingState />;
    return (
        <div className='flex-1 sm:max-h-screen sm:overflow-y-auto p-3'>
            <h1 className='text-4xl px-3 pt-3'>Orden {pad(active.folio, 5)}</h1>
            <p className='px-3 text-gray-400 inline-block'>Fecha del pedido: {toDataDate(active.fecha_pedido)}</p>
            |
            <p className='px-3 text-gray-500 inline-block sm:pl-4'>Fecha de entrega: {toDataDate(active.fecha_entrega)}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <div className='grid lg:grid-cols-6'>
                        <div className='shadow rounded-xl p-2 m-3 lg:col-span-3'>
                            <h3 className='text-xl text-gray-700 font-medium'>Paciente</h3>
                            <p>{`${active.paciente.nombre} ${active.paciente.apellido_paterno} ${active.paciente.apellido_materno || ''}`}</p>
                            <p>{`${active.paciente.correo || ''}`}</p>
                            <p>{`${active.paciente.telefono || ''}`}</p>

                            {active.comentarios &&
                                <>
                                    <p className='text-xl text-gray-700'>Comentarios</p>
                                    <p>{active.comentarios}</p>
                                </>
                            }
                        </div>
                        <div className='lg:col-span-3'>
                            <div className='shadow rounded-xl p-2 m-3'>
                                <h3 className='text-xl text-gray-700 font-medium'>Doctor</h3>
                                <p>{`${active.doctor.nombre} ${active.doctor.apellido_paterno} ${active.doctor.apellido_materno || ''}`}</p>
                                <p>{`${active.doctor.correo || ''}`}</p>
                                <p>{`${active.doctor.telefono || ''}`}</p>
                            </div>
                            <div className='shadow rounded-xl p-2 m-3'>
                                <h3 className='text-xl text-gray-700 font-medium'>Institucion</h3>
                                <p>{active.institucion.institucion}</p>
                            </div>
                        </div>
                        <div className='lg:col-span-6 shadow rounded-xl p-2 m-3'>
                            <h3 className='text-xl text-gray-700 font-medium'>Facturacion</h3>
                            <p>{active.facturacion.rfc}</p>
                            <p>{active.facturacion.correo}</p>
                            <p>{active.facturacion.uso_cfdi}</p>
                            <p>{active.facturacion.forma_pago}</p>
                        </div>
                        <div className='lg:col-span-6 shadow rounded-xl p-2 m-3'>
                            <h3 className='text-2xl text-gray-700'>
                                Análisis: {active.analisis.length}
                            </h3>
                            <table className='w-full mb-3'>
                                <thead>
                                    <tr className='border-b border-gray-400'>
                                        <th colSpan="2" className='text-left pl-12 py-2'>Análisis</th>
                                        <th className='text-right px-3 py-2'>Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {active.analisis.map((i, index) => (
                                        <tr key={index}>
                                            <td className='w-9'>
                                                <div className='pt-3 pl-3'>
                                                    <FontAwesomeIcon
                                                        icon={faCheckSquare}
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
                    </div>
                </div>
                <div>
                    <div className='shadow rounded-xl p-2.5 m-3'>
                        <h3 className='text-xl text-gray-700 font-medium'>Resumen</h3>
                        <div className='flex'>
                            <p className='flex-1 text-right pr-6'>Subtotal:</p>
                            <p className='w-20 text-right'>{numberFormat(active.totales.subtotal)}</p>
                        </div>
                        <div className='flex'>
                            <p className='flex-1 text-right pr-6'>Descuento ({active.totales.descuento_pc}%):</p>
                            <p className='w-20 text-right'>{numberFormat(active.totales.descuento)}</p>
                        </div>
                        <div className='flex'>
                            <p className='flex-1 text-right pr-6'>Descuento Extra:</p>
                            <p className='w-20 text-right'>{numberFormat(active.totales.descuento_2)}</p>
                        </div>
                        <div className='flex'>
                            <p className='flex-1 text-right pr-6'>Extras:</p>
                            <p className='w-20 text-right'>{numberFormat(active.totales.extras)}</p>
                        </div>
                        <div className='flex text-sm text-gray-400'>
                            <p className='flex-1 text-right pr-6'>Comisión ({active.totales.comision_pc}%):</p>
                            <p className='w-20 text-right'>{numberFormat(active.totales.comision)}</p>
                        </div>
                        <div className='flex mb-3'>
                            <p className='flex-1 text-right pr-6 font-semibold'>Total:</p>
                            <p className='w-20 text-right font-semibold'>{numberFormat(active.totales.total)}</p>
                        </div>
                        {active.pagos.map((i, index) => (
                            <div
                                className='flex'
                                key={index}
                            >
                                <p className='flex-1 text-right pr-6'>Pago ({toDataDate(i.fecha_pago)}):</p>
                                <p className='w-20 text-right'>{numberFormat(i.pago)}</p>
                            </div>
                        ))}
                        <div className='flex mt-3'>
                            <p className='flex-1 text-right pr-6 font-semibold'>Balance:</p>
                            <p className='w-20 text-right font-semibold'>{numberFormat(getBalance())}</p>
                        </div>
                    </div>
                    <div className='shadow rounded-xl p-2 m-3'>
                        <h3 className='text-xl text-gray-700 font-medium'>
                            Archivos: {active.files.length}
                        </h3>
                        {active.files
                            .sort((a, b) => {
                                if (a.type === 'recibo')
                                    return 1;
                                return dayjs(a.fecha) > dayjs(b.fecha) ? 1 : -1;
                            })
                            .map((i, index) => (
                                <div className='flex cursor-pointer rounded-lg my-1 hover:bg-gray-100' key={index}>
                                    <div className='p-3'>
                                        <FontAwesomeIcon
                                            className='text-red-600'
                                            icon={faFilePdf}
                                            size='2x'
                                        />
                                    </div>
                                    <p className='my-auto flex-grow select-none'>
                                        {nameCapitalized(i.type)} {toDataDate(i.fecha)}
                                    </p>
                                    <div className='my-auto px-3'>
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            size='lg'
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
