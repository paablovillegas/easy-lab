import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { numberFormat } from '../../../../helper/currency';
import { toInputDate } from '../../../../helper/fechas';

export const ItemOrden = ({ item }) => {

    const getName = (item) => {
        let nombre = ''
        if (item.apellido_materno)
            nombre += ` ${item.apellido_materno}`;
        nombre = `${item.nombre} ${item.apellido_paterno}${nombre}`;
        return nombre;
    }

    const getDoctor = () => {
        if (!item.doctor) return '';
        return getName(item.doctor);
    }

    const getInstitucion = () => {
        if (!item.institucion) return '';
        return item.institucion.institucion;
    }

    const getAnalisis = () => {
        return item.analisis.reduce((acc, i, index) => {
            let aux = i.analisis;
            if (index + 1 < item.analisis.length)
                aux += ', ';
            return acc + aux;
        }, '');
    }

    return (
        <tr className='hover:bg-gray-50'>
            <td className='py-4 text-center'>{item.folio}</td>
            <td className='py-4 text-center'>{toInputDate(item.fecha_pedido)}</td>
            <td className='py-4 whitespace-nowrap overflow-hidden overflow-ellipsis'>{getName(item.paciente)}</td>
            <td className='py-4 whitespace-nowrap overflow-hidden overflow-ellipsis'>{getDoctor()}</td>
            <td className='py-4 whitespace-nowrap overflow-hidden overflow-ellipsis'>{getInstitucion()}</td>
            <td className='py-4 whitespace-nowrap overflow-hidden overflow-ellipsis'>{getAnalisis()}</td>
            <td className='py-4 text-right'>{numberFormat(item.totales.total)}</td>
            <td className='text-center'>
                <button className='p-3 focus:outline-none text-gray-900'>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </td>
        </tr>
    );
}
