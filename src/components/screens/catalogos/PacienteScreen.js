import React, { useReducer, useState } from 'react'
import { changePaciente, dataReducer } from '../../../hooks/dataReducer'
import { pacientesApi } from '../../../sample/Pacientes'
import { PacienteForm } from '../../forms/catalogos/PacienteForm'
import { SearchBar } from '../../forms/search-bar/SearchBar'
import { NavBar } from '../../nav-bar/NavBar'

export const PacienteScreen = () => {
    const [barraLateral, setBarraLateral] = useState(true);
    const [pacientes, dispatchPacientes] = useReducer(dataReducer, []);
    const [paciente, dispatchPaciente] = useReducer(changePaciente);

    setTimeout(() => {
        dispatchPacientes({
            type: 'fetch',
            payload: pacientesApi
        })
    }, 1500);


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
                    <SearchBar
                        data={pacientes}
                        selection={dispatchPaciente}
                    />
                </div>
                <div className='sm:flex-1'>
                    {
                        paciente &&
                        <PacienteForm 
                            paciente={paciente}
                            handleInputChange={dispatchPaciente}
                            barraLateral={barraLateral}
                            setBarraLateral={setBarraLateral}
                        />
                    }
                </div>
            </div>
        </div>
    )
}
