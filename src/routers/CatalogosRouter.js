import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { DoctorForm } from '../components/forms/catalogos/DoctorForm';
import { ScreenInstituciones } from '../components/screens/catalogos/institucion/_ScreenInstituciones';
import { InicioCatalogo } from '../components/screens/catalogos/_InicioScreen';

export const CatalogosRouter = () => {
    return (
        <div className="flex flex-1">
            <Switch>
                <Route exact path="/catalogos" component={InicioCatalogo} />
                <Route path="/catalogos/instituciones" component={ScreenInstituciones} />
                <Route path="/catalogos/doctores" component={DoctorForm} />
            </Switch>
        </div>
    )
}
