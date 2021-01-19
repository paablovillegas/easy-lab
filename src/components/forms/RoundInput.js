import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const RoundInput = ({title, placeholder, icon, inputType='text'}) => {
    return (
        <div>
            {
                title && 
                <label className="block mt-2 mb-1 text-sm text-gray-300">{title}</label>
            }
            <div className="relative">
                <FontAwesomeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" icon={icon} />
                <input 
                    type={inputType} 
                    placeholder={placeholder} 
                    className="bg-gray-50 text-gray-600 placeholder-gray-300 rounded-full shadow-sm ring-1 ring-gray-700 py-2 pl-11 pr-2 w-full transition duration-300 focus:outline-none focus:shadow-md"
                />
            </div>
        </div>
    )
}