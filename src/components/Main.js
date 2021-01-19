import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { RegularButton } from './forms/RegularButton'
import { RegularInput } from './forms/RegularInput'
import { RoundInput } from './forms/RoundInput'

export const Main = () => {
    return (
        <div className="flex flex-col px-2 space-y-6">
            <RegularInput placeholder="Nombre" icon={faUser} inputType="number"/>
            <RoundInput  placeholder="Nombre, correo, teléfono" icon={faSearch}/>
            <RegularButton title="Actualizar"/>
        </div>
    )
}
