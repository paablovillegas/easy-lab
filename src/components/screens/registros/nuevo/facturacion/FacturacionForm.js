import React, { useState } from 'react'
import { ToggleSwitch } from '../../../../forms/input-types/ToggleSwitch';

export const FacturacionForm = ({ next, prev }) => {
    const [active, setActive] = useState(true);

    const submit = (e) => {
        e.preventDefault();
        console.log(active);
        next();
    };

    return (
        <form
            onSubmit={submit}
        >
            <div className={`rounded-xl p-3 mx-4 mb-3 ${active ? 'shadow' : 'shadow-sm'}`}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 mb-3'>
                    <div className='md:col-span-2 lg:col-span-3'>
                        <ToggleSwitch
                            title='Facturación'
                            active={active}
                            setActive={setActive}
                        />
                    </div>
                </div>
            </div>
            <div className='flex px-4 pb-3 space-x-2 mt-3'>
                <button
                    className='flex-1 rounded py-2 font-medium uppercase text-gray-700 transition duration-300 active:bg-gray-200 focus:outline-none'
                    type='button'
                    onClick={prev}
                >
                    Anterior
                    </button>
                <button
                    className='flex-1 rounded py-2 font-medium uppercase text-yellow-400 bg-gray-700 transition duration-300 active:bg-gray-900 focus:outline-none'
                >
                    Siguiente
                    </button>
            </div>
        </form>
    );
}
