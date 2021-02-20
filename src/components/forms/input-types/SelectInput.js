import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const SelectInput = ({
    title, 
    icon,
    options,
    name,
    value,
    onChange,
    required = false,
    disabled = false,
    firstDisabled = true,
}) => {
    return (
        <div>
            <label className="block mt-2 mb-1 text-sm text-gray-300">{title}</label>
            <div className="relative">
                <FontAwesomeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" icon={icon} />
                <FontAwesomeIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" icon={faAngleDown} />
                <select 
                    className="appearance-none bg-gray-100 text-gray-600 rounded shadow-sm py-2 px-11 w-full transition duration-300 focus:outline-none focus:shadow-md"
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required && !disabled}
                    disabled={disabled}
                >
                    {
                        options.map(option => (
                            <option 
                                key={option.value}
                                value={option.value}
                                disabled={firstDisabled ? option.value.toString().length === 0 : false}
                            >
                                {option.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
