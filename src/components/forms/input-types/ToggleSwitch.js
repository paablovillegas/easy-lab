import React from 'react'

export const ToggleSwitch = ({ title, active, setActive }) => {
    const setValue = () => setActive(!active);

    return (
        <div
            className='flex justify-between items-center cursor-pointer'
            onClick={setValue}
        >
            <p className={`text-lg ${active ? 'text-gray-700' : 'text-gray-500'}`}>{title}</p>
            <div className={`w-10 h-6 bg-gray-300 rounded-full flex-shrink-0 p-1 transition duration-300 ${active && 'bg-gray-700'}`}>
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${active && 'translate-x-4'}`}></div>
            </div>
        </div>
    );
}
