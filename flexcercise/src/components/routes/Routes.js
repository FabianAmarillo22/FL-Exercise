import React from 'react'
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from '../Pages/Home';
import AdopcionResponsable from '../Pages/AdopcionResponsable';
import HogarDeAcogida from '../Pages/HogarDeAcogida';
import ColaboraConNosotros from '../Pages/ColaboraConNosotros';
import Normas from '../Pages/Normas';
import Refugios from '../Pages/Refugios';
import Contactos from '../Pages/Contactos';


export default function Routes() {

    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/AdopcionResponsable" exact>
                <AdopcionResponsable />
            </Route>
            <Route path="/HogarDeAcogida" exact>
                <HogarDeAcogida />
            </Route>
            <Route path="/ColaboraConNosotros" exact>
                <ColaboraConNosotros />
            </Route>
            <Route path="/Normas" exact>
                <Normas />
            </Route>
            <Route path="/Refugios" exact>
                <Refugios />
            </Route>
            <Route path="/Contactos" exact>
                <Contactos />
            </Route>
        </Switch>
    )
}
