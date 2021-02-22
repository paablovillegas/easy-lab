import { faChevronRight, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dayjs from 'dayjs';
import React from 'react'
import { useSelector } from 'react-redux';
import { nameCapitalized } from '../../../../helper/capitalize';
import { toDataDate } from '../../../../helper/fechas';

export const ArchivosItem = () => {
    const { files } = useSelector(state => state.orden.active);

    return (
        <div className='shadow rounded-xl p-2 m-1.5'>
            <h3 className='text-xl text-gray-700 font-medium'>
                Archivos: {files.length}
            </h3>
            {files
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
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
