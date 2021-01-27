import React from 'react'

export const InicioCatalogo = ({hideBarra, titulo}) => {
    return (
        <div>
            <button onClick={() => hideBarra(state => !state) }>Inicio {titulo}!</button>
        </div>
    )
}
