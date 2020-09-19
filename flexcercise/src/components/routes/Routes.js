import React from 'react'
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from '../Pages/Home';

export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>
    )
}
