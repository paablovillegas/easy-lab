import React from 'react'
import { useSelector } from 'react-redux';

export const ResumenInstitucion = () => {
    const { institucion, institucion_activo: active } = useSelector(state => state.orden.active);
    console.log(institucion, active);
    return (
        <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
            inst
        </div>
    )
}
