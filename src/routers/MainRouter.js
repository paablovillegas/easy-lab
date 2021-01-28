import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from '../components/nav-bar/NavBar'
import { CatalogosRouter } from './CatalogosRouter'

export const MainRouter = () => {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="absolute w-screen sm:relative z-50 sm:w-16 lg:w-1/6">
                <NavBar />
            </div>
            <Switch>
                <Route path="/catalogos" component={ CatalogosRouter } />
            </Switch>
        </div>
    )
}