import React from 'react'

export const ItemFile = ({index, nombre, apellidos, handleClick}) => {

    return (
        <div 
            className="flex flex-row hover:bg-gray-200 pt-2.5 pb-2.5 select-none cursor-pointer"
            onClick={handleClick}
        >
            <p className="my-auto w-16 text-center text-lg text-gray-900 font-light">{index + 1}</p>
            <div className="flex flex-col">
                <p className="text-bg-gray-800 font-semibold">
                    {nombre}
                </p>
                <p className="text-gray-400 text-xs truncate">
                    {apellidos}
                </p>
            </div>
        </div>
    )
}
