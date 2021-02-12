import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const RegularInput = ({
    title,
    placeholder,
    icon,
    name,
    value,
    onChange,
    inputType = 'text',
    required = false,
}) => {
    return (
        <div>
            <label className="block mt-2 mb-1 text-sm text-gray-300">{title || placeholder}</label>
            <div className="relative">
                <FontAwesomeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" icon={icon} />
                <input
                    type={inputType}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="bg-gray-100 text-gray-600 placeholder-gray-400 placeholder-opacity-75 rounded shadow-sm py-2 pl-11 pr-2 w-full transition duration-300 focus:outline-none focus:shadow-md"
                    required={required}
                />
            </div>
        </div>
    )
}