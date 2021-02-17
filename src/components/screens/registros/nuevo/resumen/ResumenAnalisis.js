import React from 'react'
import { useSelector } from 'react-redux';
import { numberFormat } from '../../../../../helper/currency';


export const ResumenAnalisis = () => {
    const { analisis } = useSelector(state => state.orden.active);

    return (
        <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
            <div className='flex px-4 py-2'>
                <div className='flex-1'>
                    <p className='text-gray-700 font-semibold'>Análisis</p>
                </div>
                <p className='text-gray-700 font-semibold'>Precio</p>
            </div>
            <hr className='h-0.5 border-gray-700 bg-gray-700'/>
            { analisis.map((item, index) =>
                <React.Fragment key={index}>
                    <div className='flex px-4 py-2'>
                        <div className='flex-1'>
                            <p className='text-gray-600'>
                                {item.analisis}
                            </p>
                            <p className='text-gray-400 text-sm pl-3'>
                                {item.descripcion || ''}
                            </p>
                        </div>
                        <p>{numberFormat(item.precio)}</p>
                    </div>
                    {index + 1 !== analisis.length && <hr className='my-2' />}
                </React.Fragment>
            )}
        </div>
    )
}
