import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import image1 from "../assets/bg1.png";
import image2 from "../assets/bg2.png";
import image3 from "../assets/bg3.png";

function Dashboard() {
    return (
        <Carousel id='home'>
            <Carousel.Item>
                <div className='bg-text d-flex flex-column align-items-start justify-content-end'>
                    <h1 className='container py-1'>We assist you in</h1> 
                    <h1 className='container py-1'>Solving tomorrow’s</h1>
                    <h1 className='container pb-5 mb-5'>Problems today</h1>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='bg-text1 d-flex flex-column align-items-start justify-content-end'>
                    <h1 className='container py-1'>Creating High</h1> 
                    <h1 className='container py-1'>Performance</h1>
                    <h1 className='container pb-5 mb-5'>Digital Asset</h1>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='bg-text2 d-flex flex-column align-items-start justify-content-end'>
                    <h1 className='container py-1'>Lorem ipsum</h1> 
                    <h1 className='container py-1'>Dolor sit</h1>
                    <h1 className='container pb-5 mb-5'>Amet</h1>
                </div>
            </Carousel.Item>
        </Carousel>  
    );
    
}

export default Dashboard;