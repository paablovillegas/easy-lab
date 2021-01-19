import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const FormComponent = () => {
    return (
        <div className="px-2">
            <label className="block mt-2 mb-1 text-sm text-gray-300">Nombre</label>
            <div className="relative">
                <FontAwesomeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" icon={faUser} />
                <input type="text" placeholder="Nombre" className="bg-gray-100 text-gray-600 placeholder-gray-400 placeholder-opacity-75 rounded shadow-sm py-2 pl-11 w-full transition duration-200 focus:outline-none focus:shadow-md"/>
            </div>
        </div>
    )
}
