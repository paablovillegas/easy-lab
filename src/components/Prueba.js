import React from 'react'
import { NavBar } from './NavBar'
import { PacienteForm } from './paciente-form/PacienteForm'
import { SearchBar } from './sub-items/search-bar/SearchBar'

export const Prueba = () => {

    return (
        <div className="flex flex-col sm:flex-row h-screen">
            <div className="sm:w-16 lg:w-1/6">
                <NavBar />
            </div>
            <div className="sm:flex-1 md:w-1/4 xl:w-1/5">
                <SearchBar />
            </div>
            <div className="flex-1">
                <PacienteForm id={1} />
            </div>
        </div>
    )
}
