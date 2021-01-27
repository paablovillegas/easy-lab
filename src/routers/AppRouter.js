import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LogInScreen } from '../components/screens/LogInScreen';
import { MainRouter } from './MainRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LogInScreen} />
                    <Route path="/" component={MainRouter} />
                </Switch>
            </div>
        </Router>
    );
}