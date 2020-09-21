import React from 'react'
import { Grid } from 'semantic-ui-react';
import Routes from '../routes/Routes';

import { BrowserRouter as Router } from 'react-router-dom';
import './MainLayout.css';
import MainMenu from '../MainMenu';
import Footer from '../Footer';

export default function MainLayout() {

    return (
        <Router>
            <Grid className='MainLayout'>
                <Grid.Row className='menuRow'>
                    <MainMenu />
                </Grid.Row>
                <Grid.Row className='contentRow'>
                    <Routes />
                </Grid.Row>
                <Grid.Row className='footerRow'>
                    <Footer />
                </Grid.Row>
            </Grid>
        </Router>
    )
}
