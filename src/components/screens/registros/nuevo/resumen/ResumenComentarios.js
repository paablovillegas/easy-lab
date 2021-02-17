import { faComment, faCommentDollar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { RegularInput } from '../../../../forms/input-types/RegularInput'
import { TextAreaInput } from '../../../../forms/input-types/TextAreaInput'

export const ResumenComentarios = () => {
    return (
        <div className='rounded-xl p-3 mx-4 mb-3 shadow'>
            <p className='text-xl text-gray-800'>Comentarios</p>
            <RegularInput
                icon={faCommentDollar}
                placeholder='Extras'
                inputType='number'
            />
            <TextAreaInput
                icon={faComment}
                placeholder='Comentarios'
            />
        </div>
    );
}
