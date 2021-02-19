import React from 'react';
import './loading.css';

export const LoadingState = () => {
    return (
        <div className='relative h-screen'>
            <div className='loader'>
                <div className='primary_loader'></div>
                <div className='secondary_loader'></div>
                <div className='primary_loader_r'></div>
                <div className='secondary_loader_r'></div>
            </div>
        </div>
    )
}
