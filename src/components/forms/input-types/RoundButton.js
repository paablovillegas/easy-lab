import React from 'react'

export const RoundButton = ({ title, onClick, type = 'button' }) => {
    return (
        <button
            className={'py-1 my-1 w-1/2 text-sm place-self-center border border-gray-500 '
                + 'rounded-full focus:outline-none transition duration-300 hover:shadow-md '
                + 'active:bg-gray-100'}
            type={type}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
