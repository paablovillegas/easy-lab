import React from 'react';
import './loading.css';

export const LoadingState = () => {
    return (
        <div className='relative max-h-screen w-full h-40'>
            <div className='loader w-40 h-40'>
                <div className='h-40 w-40 rounded-full'></div>
                <div className='m-2 h-36 w-36 rounded-full reverse'></div>
                <div className='m-4 h-32 w-32 rounded-full'></div>
                <div className='m-6 h-28 w-28 rounded-full reverse'></div>
            </div>
        </div>
    )
}
