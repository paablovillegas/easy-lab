import React from 'react'

export const LoadingStateSmall = () => {
    return (
        <div className='relative max-h-screen w-20 h-16'>
            <div className='loader w-12 h-12'>
                <div className='h-12 w-12 rounded-full loader-thin'></div>
                <div className='m-1 h-10 w-10 rounded-full loader-thin reverse'></div>
                <div className='m-2 h-8 w-8 rounded-full loader-thin'></div>
                <div className='m-3 h-6 w-6 rounded-full loader-thin reverse'></div>
            </div>
        </div>
    );
};
