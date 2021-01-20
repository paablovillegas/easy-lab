import React from 'react'
import { NavBar } from './NavBar'

export const Prueba = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="h-14 md:h-auto md:w-16 lg:w-1/6">
                <NavBar />
            </div>
            <div className="md:w-1/4 xl:w-1/5 bg-blue-500"></div>
            <div className="flex-1 bg-green-500"></div>
        </div>
    )
}
