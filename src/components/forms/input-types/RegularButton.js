import React from 'react'

export const RegularButton = ({ title, disabled = false }) => {
    return (
        <button
            className='w-full bg-gray-800 text-yellow-400 font-semibold uppercase py-1 text-lg tracking-wide rounded-md shadow transition duration-300 hover:shadow-md focus:outline-none active:bg-gray-900'
            type='submit'
            disabled={disabled}
        >
            {title}
        </button>
    )
}
