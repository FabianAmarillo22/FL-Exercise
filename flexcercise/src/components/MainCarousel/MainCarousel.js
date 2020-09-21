import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import slideOne from "../../assets/1.png";
import slideTwo from "../../assets/2.png";
import slideThree from "../../assets/3.png";

import './MainCarousel.css';

export default function MainCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='Carousel' style={{width:"100%important"}}>
           <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{backgroundImage: `url(${slideOne})`, height:"50vh", width:"100%important"}}>
        <div
          className="d-block w-100"
          src='../../../assets/2.png'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundImage: `url(${slideTwo})`, height:"50vh", width:"100%important"}}>
        <div
          className="d-block w-100"
          src='../../../assets/2.png'
          
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{backgroundImage: `url(${slideThree})`, height:"50vh", width:"100%important"}}>
        <div
          className="d-block w-100"
          src='../../../assets/2.png'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}
