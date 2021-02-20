import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { InicioRegistros } from '../components/screens/registros/InicioRegistros';
import { OrdenScreen } from '../components/screens/registros/item/OrdenScreen';
import { NuevaOrdenScreen } from '../components/screens/registros/nuevo/_NuevaOrdenScreen';
import { ScreenOrden } from '../components/screens/registros/orden/_ScreenOrden';

export const RegistrosRouter = () => {
    return (
        <div className="flex flex-1 min-h-screen pt-12 sm:pt-0">
            <Switch>
                <Route exact path="/registros" component={InicioRegistros} />
                <Route path="/registros/nuevo" component={NuevaOrdenScreen} />
                <Route path="/registros/ordenes" component={ScreenOrden} />
                <Route exact path="/registros/:uid" component={OrdenScreen} />
            </Switch>
        </div>
    );
}
