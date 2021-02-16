import React from 'react'

export const NextPrevious = ({ pDisabled = false, nDisabled = false, previous }) => {
    return (
        <div className='flex px-4 pb-3 mt-3 space-x-2'>
            <button
                className='flex-1 rounded py-2 font-medium uppercase text-gray-700 transition duration-300 active:bg-gray-200 focus:outline-none disabled:opacity-50'
                disabled={pDisabled}
                type='button'
                onClick={previous}
            >
                Anterior
            </button>
            <button
                className='flex-1 rounded py-2 font-medium uppercase text-yellow-400 bg-gray-700 transition duration-300 active:bg-gray-900 focus:outline-none disabled:opacity-50'
                disabled={nDisabled}
            >
                Siguiente
            </button>
        </div>
    );
}
