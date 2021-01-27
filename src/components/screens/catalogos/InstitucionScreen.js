import React, { useState } from 'react'
import { InstitucionForm } from '../../forms/catalogos/InstitucionForm';
import { NavBar } from '../../nav-bar/NavBar';
import { SearchBar } from '../../forms/search-bar/SearchBar';

export const InstitucionScreen = () => {
    const [barraLateral, setBarraLateral] = useState(false);

    return (
        <div className='flex flex-col sm:flex-row'>
            <div className='sm:w-16 lg:w-1/6'>
                <NavBar />
            </div> 
            <div className='flex flex-1'>
                <div className={
                    barraLateral 
                        ? 'sm:flex-1 lg:flex-initial lg:w-1/4' 
                        : 'hidden xl:flex xl:w-1/4'
                }>
                    <SearchBar />
                </div>
                <div className='sm:flex-1'>
                    <InstitucionForm 
                        barraLateral={barraLateral}
                        setBarraLateral={setBarraLateral}
                    />
                </div>
            </div>
        </div>
    )
}
