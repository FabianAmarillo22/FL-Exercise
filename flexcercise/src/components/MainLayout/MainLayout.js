import React from 'react'
import { Grid } from 'semantic-ui-react';
import Routes from '../routes/Routes';

import { BrowserRouter as Router } from 'react-router-dom';
import './MainLayout.css';

export default function MainLayout() {

    return (
        <Router>
            <Grid className='MainLayout'>
                <Grid.Row className='firstRow'>
                    <Routes />
                </Grid.Row>
            </Grid>
        </Router>
    )
}
