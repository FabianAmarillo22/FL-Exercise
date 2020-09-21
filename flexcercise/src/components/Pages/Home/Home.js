import React from 'react';
import './Home.css';
import MainCarousel from '../../MainCarousel';
import HomeMainContent from '../../HomeMainContent';
import { Divider } from 'semantic-ui-react';

export default function Home() {
    return (
      <>
        <MainCarousel/>
        <Divider />
        <Divider />
        <HomeMainContent />
      </>
    )
}
