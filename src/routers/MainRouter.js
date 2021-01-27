import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NavBar } from '../components/nav-bar/NavBar'
import { CatalogosRouter } from './CatalogosRouter'

export const MainRouter = () => {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="sm:w-16 lg:w-1/6">
                <NavBar />
            </div>
            <div className="flex flex-1">
                <Switch>
                    <Route path="/catalogos" component={ CatalogosRouter } />
                </Switch>
            </div>
        </div>
    )
}
/*
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
                    <AnalisisForm 
                        barraLateral={barraLateral}
                        setBarraLateral={setBarraLateral}
                    />
                </div>
            </div>
        </div>
*/