import React from 'react';

const styleRegular = 'border border-gray-700 bg-gray-700 text-white';

const styleActive = 'border border-gray-700 bg-gray-700 text-yellow-400';

const styleOutline = 'border border-gray-300 text-gray-300';

const lineOutline = 'bg-gray-300';

const lineRegular = 'bg-gray-700';

export const Stepper = ({ steps = [], step, setStep }) => {

    return (
        <div
            className='flex p-2'>
            <div className='w-6'></div>
            {
                steps.map((i, index) =>
                    <React.Fragment
                        key={index}
                    >
                        <button
                            className={`flex-1 rounded-xl py-1.5 uppercase font-medium focus:outline-none transition duration-300
                                ${index + 1 < step ? styleRegular : index + 1 === step ? styleActive : styleOutline}`}
                            type='button'
                            onClick={() => setStep(index + 1)}
                            disabled={index >= step}
                        >
                            <span className='hidden md:inline'>{i}</span>
                            <span className='inline md:hidden'>{i[0]}</span>

                        </button>
                        {
                            index + 1 !== steps.length &&
                            <div className={`w-6 lg:w-8 h-1 my-auto transition duration-300 ${index + 1 < step ? lineRegular : lineOutline}`}></div>
                        }
                    </React.Fragment>
                )
            }
            <div className='w-6'></div>
        </div>
    )
}
