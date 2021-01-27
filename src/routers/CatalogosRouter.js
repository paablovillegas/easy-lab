import React, { useReducer, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { DoctorForm } from '../components/forms/catalogos/DoctorForm';
import { InstitucionForm } from '../components/forms/catalogos/InstitucionForm';
import { PacienteForm } from '../components/forms/catalogos/PacienteForm';
import { SearchBar } from '../components/sub-items/search-bar/SearchBar';
import { changePaciente, dataReducer } from '../hooks/dataReducer';
import { pacientesApi } from '../sample/Pacientes';

export const CatalogosRouter = () => {
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
        <>
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
            <Switch>
                <div className="flex-1">
                    <Route exact path="/catalogos/instituciones" component={InstitucionForm} />
                    <Route exact path="/catalogos/doctores" component={DoctorForm} />
                </div>
            </Switch>
        </>
    )
}
