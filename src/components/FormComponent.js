import React from 'react'

export const FormComponent = () => {
    return (
        <div className="flex">
            <div className="flex-grow px-2">
                <label className="block mt-2 mb-1 text-sm text-gray-300">Nombre</label>
                <input type="text" placeholder="Nombre" className="bg-gray-100 rounded shadow-sm py-2 pl-4 w-full transition duration-300 text-gray-600 focus:outline-none focus:shadow-md placeholder-gray-400 placeholder-opacity-75"/>
            </div>
        </div>
    )
}
