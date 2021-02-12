import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const ResumeBar = ({ title, cantidad, onClick }) => {
    return (
        <div className='w-full h-10 absolute bottom-0 bg-gray-200 flex flex-col justify-center'>
            <p className="text-sm text-center text-gray-600">{title}</p>
            <p className="text-xs text-center text-gray-500">{cantidad}</p>
            <button
                className='absolute right-0 top-1 bottom-1 mx-1 px-1.5 focus:outline-none transition rounded active:bg-gray-300'
                onClick={onClick}
            >
                <FontAwesomeIcon
                    icon={faRedoAlt}
                    size="xs"
                    flip="horizontal"
                />
            </button>
        </div>
    )
}
