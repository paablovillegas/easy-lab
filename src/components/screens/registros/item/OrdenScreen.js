import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { pad } from '../../../../helper/currency';
import { toDataDate } from '../../../../helper/fechas';
import { startFetchItem } from '../../../../redux/actions/orden';
import { LoadingState } from '../../loading/LoadingState';
import { AnalisisItem } from './AnalisisItem';
import { ArchivosItem } from './ArchivosItem';
import { BalanceItem } from './BalanceItem';
import { InfoItem } from './InfoItem';
import { NuevoPagoForm } from './NuevoPagoForm';

export const OrdenScreen = () => {
    const active = useSelector(state => state.orden.active);
    const dispatch = useDispatch();
    const { uid } = useParams();

    const getBalance = () => active.totales.total -
        active.pagos.reduce((acc, i) => acc += i.pago, 0);

    useEffect(() => {
        dispatch(startFetchItem(uid));
    }, [dispatch, uid]);

    if (!active)
        return <LoadingState />;
    return (
        <div className='flex-1 sm:max-h-screen sm:overflow-y-auto p-3'>
            <h1 className='text-4xl px-3 pt-3'>Orden #{pad(active.folio, 5)}</h1>
            <p className='px-3 text-gray-400 inline-block'>Fecha del pedido: {toDataDate(active.fecha_pedido)}</p>
            |
            <p className='px-3 text-gray-500 inline-block sm:pl-4'>Fecha de entrega: {toDataDate(active.fecha_entrega)}</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <div className='grid lg:grid-cols-6'>
                        <InfoItem />
                        <AnalisisItem />
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
