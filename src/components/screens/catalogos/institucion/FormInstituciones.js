import React from 'react'
import { useParams } from 'react-router-dom'

export const FormInstituciones = () => {
    let { id } = useParams()
    console.log(id);

    return (
        <div className='sm:flex-1'>
            <p>FOOORM {id}</p>
        </div>
    )
}
