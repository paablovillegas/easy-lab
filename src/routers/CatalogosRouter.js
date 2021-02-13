import React from 'react'
import { Route, Switch } from 'react-router-dom';

import { ScreenInstituciones } from '../components/screens/catalogos/institucion/_ScreenInstituciones';
import { ScreenAnalisis } from '../components/screens/catalogos/analisis/_ScreenAnalisis';
import { ScreenPaciente } from '../components/screens/catalogos/paciente/_ScreenPaciente';
import { ScreenDoctor } from '../components/screens/catalogos/doctor/_ScreenDoctor';
import { InicioCatalogo } from '../components/screens/catalogos/_InicioScreen';
import { ScreenComponente } from '../components/screens/catalogos/componente/_ScreenComponente';

export const CatalogosRouter = () => {
    return (
        <div className="flex flex-1 min-h-screen pt-12 sm:pt-0">
            <Switch>
                <Route exact path="/catalogos" component={InicioCatalogo} />
                <Route path="/catalogos/instituciones" component={ScreenInstituciones} />
                <Route path="/catalogos/pacientes" component={ScreenPaciente} />
                <Route path="/catalogos/analisis" component={ScreenAnalisis} />
                <Route path="/catalogos/doctores" component={ScreenDoctor} />
                <Route path="/catalogos/componentes" component={ScreenComponente} />
            </Switch>
        </div>
    )
}
