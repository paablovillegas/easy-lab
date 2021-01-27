import React, { useReducer, useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import { DoctorForm } from '../components/forms/catalogos/DoctorForm';
import { InstitucionForm } from '../components/forms/catalogos/InstitucionForm';
import { InicioCatalogo } from '../components/screens/catalogos/_InicioScreen';
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
        <div className="flex flex-1">
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
            <div className="flex-1">
                <Switch>
                    <Route exact path="/catalogos" render={ (props) => <InicioCatalogo {...props} hideBarra={setBarraLateral} titulo='Ejemplo' /> } />
                    <Route path="/catalogos/instituciones" component={InstitucionForm} />
                    <Route path="/catalogos/doctores" component={DoctorForm} />
                </Switch>
            </div>
        </div>
    )
}
