import { faComment, faCommentDollar, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setComentarios, setTotales } from '../../../../../redux/actions/orden/newOrden'
import { RegularInput } from '../../../../forms/input-types/RegularInput'
import { TextAreaInput } from '../../../../forms/input-types/TextAreaInput'

export const ResumenComentarios = () => {
    const { comentarios, totales } = useSelector(state => state.orden.active);
    const dispatch = useDispatch();

    const handleComentarios = ({ target }) =>
        dispatch(setComentarios(target.value));

    const handleTotales = ({ target }) =>
        dispatch(setTotales({ ...totales, [target.name]: target.value }));

    return (
        <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
            <p className='text-xl text-gray-800'>Comentarios</p>
            <RegularInput
                icon={faCommentDollar}
                placeholder='Extras'
                inputType='number'
                name='extras'
                value={totales.extras}
                onChange={handleTotales}
            />
            <RegularInput
                icon={faMoneyBillWave}
                placeholder='Descuento Extra'
                inputType='number'
                name='descuento_2'
                value={totales.descuento_2}
                onChange={handleTotales}
            />
            <TextAreaInput
                icon={faComment}
                placeholder='Comentarios'
                name='comentarios'
                value={comentarios}
                onChange={handleComentarios}
            />
        </div>
    );
}
