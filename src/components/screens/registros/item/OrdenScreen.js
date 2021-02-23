import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { pad } from '../../../../helper/currency';
import { toDataDate } from '../../../../helper/fechas';
import { startFetchItem, startPublicacion } from '../../../../redux/actions/orden';
import { LoadingState } from '../../loading/LoadingState';
import { LoadingStateSmall } from '../../loading/LoadingStateSmall';
import { AnalisisItem } from './AnalisisItem';
import { ArchivosItem } from './ArchivosItem';
import { BalanceItem } from './BalanceItem';
import { InfoItem } from './InfoItem';
import { NuevoPagoForm } from './NuevoPagoForm';
import { ResultadosItem } from './ResultadosItem';

export const OrdenScreen = () => {
    const active = useSelector(state => state.orden.active);
    const dispatch = useDispatch();
    const { uid } = useParams();

    const getBalance = () => active.totales.total -
        active.pagos.reduce((acc, i) => acc += i.pago, 0);

    useEffect(() => {
        dispatch(startFetchItem(uid));
    }, [dispatch, uid]);

    const allCaptured = () => active.analisis.every(als =>
        als.componentes.every(comp => comp.resultado));

    const publicar = () => {
        dispatch(startPublicacion(active._id));
    }

    if (!active)
        return <LoadingState />;
    return (
        <div className='flex-1 sm:max-h-screen sm:overflow-y-auto p-3'>
            <div className='flex'>
                <div className='flex-grow'>
                    <h1 className='text-4xl px-3 pt-3'>
                        Orden #{pad(active.folio, 5)}
                        <small className={`text-lg ml-0.5 py-0.5 px-2 text-white rounded ${active.publicado ? 'bg-green-700' : 'bg-gray-500'}`}>
                            {active.publicado ? 'Publicado' : 'No publicado'}
                        </small>
                    </h1>
                    <p className='px-3 text-gray-400 inline-block'>Fecha del pedido: {toDataDate(active.fecha_pedido)} | </p>
                    <p className='px-3 text-gray-500 inline-block sm:pl-4'>Fecha de entrega: {toDataDate(active.fecha_entrega)}</p>
                </div>
                <div className='my-auto px-3 w-20'>
                    <LoadingStateSmall />
                </div>
                {!active.publicado && allCaptured() &&
                    <button
                        className='my-auto py-2 px-4 bg-gray-700 text-white uppercase font-semibold focus:outline-none rounded'
                        onClick={publicar}
                    >
                        Publicar
                    </button>
                }
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <div className='grid lg:grid-cols-6'>
                        <InfoItem />
                        <AnalisisItem />
                        {!active.publicado && <ResultadosItem />}
                    </div>
                </div>
                <div>
                    <BalanceItem />
                    {getBalance() > 0 && <NuevoPagoForm />}
                    <ArchivosItem />

                </div>
            </div>
        </div>
    )
}
